import { Game, GameStorePacked } from "@/generated/graphql";
import { computed, makeObservable, observable } from "mobx";
import { CairoCustomEnum } from "starknet";
import { ConfigStore } from "../stores/config";
import { ShopAction, TradeAction } from "../types";
import { DrugsClass } from "./Drugs";
import { ItemsClass } from "./Items";
import { MarketsClass } from "./Market";
import { PlayerClass } from "./Player";
import { WantedClass } from "./Wanted";
import Bits from "./utils/Bits";

export type DrugMarket = {
    drug: string;
    drugId: number;
    price: number;
    weight: number;
};

export type MarketsByLocation = Map<string, DrugMarket[]>;
export type WantedByLocation = Map<string, number>;

export type WithCost = { cost: number };
export type PendingCall = (TradeAction | ShopAction);
export type PendingCallWithCost = (TradeAction | ShopAction) & WithCost;

//
//
//


export const isTradeAction = (i: PendingCall): i is TradeAction => "direction" in i;
export const isShopAction = (i: PendingCall): i is ShopAction => "slot" in i;

export const pendingCallToCairoEnum = (i: PendingCall) => {
    if (isTradeAction(i)) {
        return new CairoCustomEnum({ Trade: (i as TradeAction), Shop: undefined });
    } else if (isShopAction(i)) {
        return new CairoCustomEnum({ Trade: undefined, Shop: (i as ShopAction) });
    }
}


//
//
//

export class GameClass {
    gameInfos: Game;
    packed: bigint;

    markets: MarketsClass;
    items: ItemsClass;
    drugs: DrugsClass;
    wanted: WantedClass;
    player: PlayerClass;

    pending: Array<PendingCallWithCost>;

    constructor(configStore: ConfigStore,gameInfos: Game, gameStorePacked: GameStorePacked) {
        this.gameInfos = gameInfos;
        this.packed = gameStorePacked.packed;
        //
        const markets = configStore.getGameStoreLayoutItem("Markets")
        const marketsPacked = Bits.extract(this.packed, markets.idx, markets.bits);
        this.markets = new MarketsClass(configStore, this, marketsPacked)

        const items = configStore.getGameStoreLayoutItem("Items")
        const itemsPacked = Bits.extract(this.packed, items.idx, items.bits);
        this.items = new ItemsClass(configStore, this, itemsPacked)

        const drugs = configStore.getGameStoreLayoutItem("Drugs")
        const drugsPacked = Bits.extract(this.packed, drugs.idx, drugs.bits);
        this.drugs = new DrugsClass(configStore, this, drugsPacked)

        const wanted = configStore.getGameStoreLayoutItem("Wanted")
        const wantedPacked = Bits.extract(this.packed, wanted.idx, wanted.bits);
        this.wanted = new WantedClass(configStore, this, wantedPacked)

        const player = configStore.getGameStoreLayoutItem("Player")
        const playerPacked = Bits.extract(this.packed, player.idx, player.bits)
        this.player = new PlayerClass(configStore, this, playerPacked);

        this.pending = []

        makeObservable(this, {
            pending: observable,
            player: observable,
            isShopOpen: computed
        })

        console.log("Game", this)
    }


    clearPendingCalls() {
        this.pending = []
    }

    pushCall(call: PendingCallWithCost) {
        this.pending.push(call)
    }

    getPendingCalls(): Array<PendingCall> {
        return this.pending
            .map(i => {
                const {
                    cost: _,
                    ...withoutCost
                } = i
                return withoutCost
            })
    }

    //
    //
    //


    get isShopOpen() {
        const wanted = this.player.wanted
        const maxWantedShopping = this.gameInfos.max_wanted_shopping

        return wanted < maxWantedShopping
    }

}


















