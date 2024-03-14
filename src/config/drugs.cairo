use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};

use rollyourown::utils::bytes16::{Bytes16, Bytes16Impl, Bytes16Trait};
use rollyourown::utils::introspect::Bytes16IntrospectionImpl;

use rollyourown::{traits::{Enumerable}, utils::introspect::{Bytes31IntrospectionImpl}};


#[derive(Copy, Drop, Serde, PartialEq, Introspect)]
enum Drugs {
    Ludes,
    Speed,
    Weed,
    Shrooms,
    Acid,
    Ketamine,
    Heroin,
    Cocaine,
}


#[derive(Model, Copy, Drop, Serde)]
struct DrugConfig {
    #[key]
    drug: Drugs,
    drug_id: u8,
    base: u16,
    step: u16,
    weight: u16,
    name: Bytes16,
}


//
//
//

#[generate_trait]
impl DrugConfigImpl of DrugConfigTrait {
    #[inline(always)]
    fn get(world: IWorldDispatcher, drug: Drugs) -> DrugConfig {
        get!(world, (drug), DrugConfig)
    }
}

//
//
//

impl DrugsEnumerableImpl of Enumerable<Drugs> {
    #[inline(always)]
    fn all() -> Span<Drugs> {
        let mut items = array![
            Drugs::Ludes,
            Drugs::Speed,
            Drugs::Weed,
            Drugs::Shrooms,
            Drugs::Acid,
            Drugs::Ketamine,
            Drugs::Heroin,
            Drugs::Cocaine
        ];
        items.span()
    }
}

//
//
//

impl DrugsIntoFelt252 of Into<Drugs, felt252> {
    fn into(self: Drugs) -> felt252 {
        match self {
            Drugs::Ludes => 'Ludes',
            Drugs::Speed => 'Speed',
            Drugs::Weed => 'Weed',
            Drugs::Shrooms => 'Shrooms',
            Drugs::Acid => 'Acid',
            Drugs::Ketamine => 'Ketamine',
            Drugs::Heroin => 'Heroin',
            Drugs::Cocaine => 'Cocaine',
        }
    }
}

impl DrugsIntoU8 of Into<Drugs, u8> {
    fn into(self: Drugs) -> u8 {
        match self {
            Drugs::Ludes => 0,
            Drugs::Speed => 1,
            Drugs::Weed => 2,
            Drugs::Shrooms => 3,
            Drugs::Acid => 4,
            Drugs::Ketamine => 5,
            Drugs::Heroin => 6,
            Drugs::Cocaine => 7,
        }
    }
}

impl U8IntoDrugs of Into<u8, Drugs> {
    fn into(self: u8) -> Drugs {
        let self252: felt252 = self.into();
        match self252 {
            0 => Drugs::Ludes,
            1 => Drugs::Speed,
            2 => Drugs::Weed,
            3 => Drugs::Shrooms,
            4 => Drugs::Acid,
            5 => Drugs::Ketamine,
            6 => Drugs::Heroin,
            7 => Drugs::Cocaine,
            _ => Drugs::Ludes,
        }
    }
}


//
//
//

fn initialize_drug_config(world: IWorldDispatcher) {
    set!(
        world,
        DrugConfig {
            drug: Drugs::Ludes,
            drug_id: Drugs::Ludes.into(),
            base: 18,
            step: 1,
            weight: 5,
            name: Bytes16Impl::from('Ludes')
        }
    );

    set!(
        world,
        DrugConfig {
            drug: Drugs::Speed,
            drug_id: Drugs::Speed.into(),
            base: 85,
            step: 6,
            weight: 10,
            name: Bytes16Impl::from('Speed')
        }
    );

    set!(
        world,
        DrugConfig {
            drug: Drugs::Weed,
            drug_id: Drugs::Weed.into(),
            base: 290,
            step: 18,
            weight: 15,
            name: Bytes16Impl::from('Weed')
        }
    );

     set!(
        world,
        DrugConfig {
            drug: Drugs::Shrooms,
            drug_id: Drugs::Shrooms.into(),
            base: 980,
            step: 54,
            weight: 25,
            name: Bytes16Impl::from('Shrooms')
        }
    );

    set!(
        world,
        DrugConfig {
            drug: Drugs::Acid,
            drug_id: Drugs::Acid.into(),
            base: 2900,
            step: 111,
            weight: 30,
            name: Bytes16Impl::from('Acid')
        }
    );

     set!(
        world,
        DrugConfig {
            drug: Drugs::Ketamine,
            drug_id: Drugs::Ketamine.into(),
            base: 6800,
            step: 186,
            weight: 45,
            name: Bytes16Impl::from('Ketamine')
        }
    );

    set!(
        world,
        DrugConfig {
            drug: Drugs::Heroin,
            drug_id: Drugs::Heroin.into(),
            base: 13500,
            step: 231,
            weight: 65,
            name: Bytes16Impl::from('Heroin')
        }
    );

    set!(
        world,
        DrugConfig {
            drug: Drugs::Cocaine,
            drug_id: Drugs::Cocaine.into(),
            base: 19800,
            step: 284,
            weight: 100,
            name: Bytes16Impl::from('Cocaine')
        }
    );
}
