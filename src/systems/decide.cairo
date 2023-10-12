use starknet::ContractAddress;
use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};
use rollyourown::models::location::LocationEnum;

#[derive(Copy, Drop, Serde, PartialEq)]
enum Action {
    Run: (),
    Pay: (),
}

#[derive(Copy, Drop, Serde, PartialEq)]
enum Outcome {
    Died: (),
    Paid: (),
    Escaped: (),
    Captured: (),
    Unsupported: (),
}


#[starknet::interface]
trait IDecide<TContractState> {
    fn decide(self: @TContractState, game_id: u32, action: Action, next_location_id: LocationEnum);
}

#[starknet::contract]
mod decide {
    use starknet::ContractAddress;
    use starknet::get_caller_address;

    use rollyourown::models::game::{Game, GameTrait};
    use rollyourown::models::risks::{Risks, RisksTrait};
    use rollyourown::models::player::{Player, PlayerTrait, PlayerStatus};
    use rollyourown::models::drug::{Drug, DrugTrait};
    use rollyourown::models::location::{LocationEnum};

    use rollyourown::utils::random;
    use rollyourown::utils::settings::{DecideSettings, DecideSettingsImpl};


    use super::{IWorldDispatcher, IWorldDispatcherTrait};
    use super::IDecide;
    use super::{Action, Outcome};

    #[storage]
    struct Storage {
        world_dispatcher: IWorldDispatcher,
    }

  #[starknet::interface]
    trait ISystem<TContractState> {
        fn world(self: @TContractState) -> IWorldDispatcher;
    }

    impl ISystemImpl of ISystem<ContractState> {
        fn world(self: @ContractState) -> IWorldDispatcher {
           self.world_dispatcher.read()
        }
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        Decision: Decision,
        Consequence: Consequence,
    }

    #[derive(Drop, starknet::Event)]
    struct Decision {
        game_id: u32,
        player_id: ContractAddress,
        action: Action
    }

    #[derive(Drop, starknet::Event)]
    struct Consequence {
        game_id: u32,
        player_id: ContractAddress,
        outcome: Outcome,
        health_loss: u8,
        drug_loss: usize,
        cash_loss: u128
    }


    #[external(v0)]
    impl DecideImpl of IDecide<ContractState> {
        fn decide(
            self: @ContractState, game_id: u32, action: Action, next_location_id: LocationEnum
        ) {
            let world = self.world();
            let player_id = get_caller_address();
            let mut player: Player = get!(world, (game_id, player_id).into(), Player);
            assert(player.status != PlayerStatus::Normal, 'player response not needed');

            let game = get!(world, game_id, Game);
            let decide_settings = DecideSettingsImpl::get(game.game_mode);

            let (mut outcome, cash_loss, drug_loss, health_loss) = match action {
                Action::Run => {
                    let mut risks = get!(world, (game_id, player.location_id).into(), Risks);
                    let seed = random::seed();
                    match risks.run(seed) {
                        bool::False => (Outcome::Escaped, 0, 0, 0),
                        bool::True => {
                            let random_loss: u8 = random::random(
                                seed, 0, decide_settings.health_impact.into()
                            )
                                .try_into()
                                .unwrap();
                            let health_loss: u8 = decide_settings.health_impact + random_loss;
                            (Outcome::Captured, 0, 0, health_loss)
                        }
                    }
                },
                Action::Pay => {
                    match player.status {
                        PlayerStatus::Normal => (Outcome::Unsupported, 0, 0, 0),
                        PlayerStatus::BeingMugged => {
                            // using same name cash_loss makes LS crash
                            let cash_loss_ = (player.cash
                                * decide_settings.gangs_payment_cash_pct.into())
                                / 100;
                            (Outcome::Paid, cash_loss_, 0, 0)
                        },
                        PlayerStatus::BeingArrested => {
                            // using same name drug_loss makes LS crash
                            let drug_loss_ = self
                                .take_drugs(
                                    game_id, player_id, decide_settings.gangs_payment_cash_pct
                                );
                            (Outcome::Paid, 0, drug_loss_, 0)
                        },
                    }
                },
            };

            if outcome == Outcome::Captured {
                player.run_attempts += 1;
            } else {
                player.status = PlayerStatus::Normal;
                player.turns_remaining -= 1;
                player.location_id = next_location_id;
                player.run_attempts = 0;
            }

            player.cash -= cash_loss;
            player.drug_count -= drug_loss;
            if health_loss >= player.health {
                player.health = 0;
                player.turns_remaining = 0;
                player.turns_remaining_on_death = player.turns_remaining;
                outcome = Outcome::Died;
            } else {
                player.health -= health_loss
            }

            set!(world, (player));
            emit!(world, Decision { game_id, player_id, action });

            // makes LS crash if inlined in emit! ( outcome / enum issue ?)
            let consequence_event = Consequence {
                game_id, player_id, outcome, health_loss, drug_loss, cash_loss
            };
            emit!(world, consequence_event);
        }
    }


    #[generate_trait]
    impl InternalImpl of DecideInternalImpl {
        fn take_drugs(
            self: @ContractState, game_id: u32, player_id: ContractAddress, percentage: usize
        ) -> usize {
            let world = self.world();
            let mut drugs = DrugTrait::all();
            let mut total_drug_loss = 0;
            loop {
                match drugs.pop_front() {
                    Option::Some(drug_id) => {
                        let mut drug = get!(world, (game_id, player_id, *drug_id), Drug);
                        if (drug.quantity != 0) {
                            let mut drug_loss = (drug.quantity * percentage) / 100;
                            drug_loss = if drug_loss == 0 {
                                1
                            } else {
                                drug_loss
                            };
                            drug.quantity -= drug_loss;
                            total_drug_loss += drug_loss;

                            set!(world, (drug));
                        }
                    },
                    Option::None => {
                        break;
                    }
                };
            };
            total_drug_loss
        }
    }
}

