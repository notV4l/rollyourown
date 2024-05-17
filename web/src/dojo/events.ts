import { EncounterOutcomes, EncountersAction } from "@/dojo/types";
import {
  GetTransactionReceiptResponse,
  num,
  shortString
} from "starknet";

import { WorldEvents } from "./generated/contractEvents";

import { Contract } from "starknet";

// TODO: update
import manifest from "../manifests/dev/manifest.json";

const contract = manifest.contracts.find(i => i.name === "rollyourown::systems::game::game")!
const gameContract = new Contract(contract.abi, contract.address)


export interface BaseEventData {
  gameId: string;
  eventType: WorldEvents;
  eventName: string;
}


export interface GameCreatedData extends BaseEventData {
  playerId: string;
  gameMode: number;
  playerName: string;
  hustlerId: number;
}

export interface TraveledData extends BaseEventData {
  playerId: string;
  turn: number;
  fromLocationId: number;
  toLocationId: number;
}

export interface TradeDrugData extends BaseEventData {
  playerId: string;
  drugId: number;
  quantity: number;
  price: number;
  isBuy: boolean;
}

export interface HighVolatilityData extends BaseEventData {
  playerId: string;
  locationId: number;
  drugId: number;
  increase: boolean;
}

export interface UpgradeItemData extends BaseEventData {
  playerId: string;
  itemSlot: number;
  itemLevel: number;
}

export interface TravelEncounterData extends BaseEventData {
  playerId: string;
  encounterId: number;
  demandPct: number;
  payout: number;
}

export interface TravelEncounterResultData extends BaseEventData {
  playerId: string;
  action: EncountersAction;
  outcome: EncounterOutcomes;
  rounds: number;
  dmgDealt: Array<{ 0: number, 1: number }>;
  dmgTaken: Array<{ 0: number, 1: number }>;
  cashEarnt: number;
  cashLoss: number;
  drugId: number;
  drugLoss: Array<number>;
  turnLoss: number;
  repPos: number,
  repNeg: number,
}


export interface MeetOGData extends BaseEventData {
  playerId: string;
  ogId: number;
}


export interface GameOverData extends BaseEventData {
  playerId: string;
  playerName: string;
  leaderboardVersion: string;
  avatarId: number; // TODO: change to hustlerId
  turn: number;
  cash: number;
  health: number;
  reputation: number;
}


export const parseAllEvents = (receipt?: GetTransactionReceiptResponse) => {
  if (!receipt || receipt.execution_status !== "SUCCEEDED") {
    return []
  }

  const flatEvents = parseEvents(receipt as GetTransactionReceiptResponse)
  return flatEvents
}

export const parseEvents = (receipt: GetTransactionReceiptResponse) => {
  const parsed = receipt.events.map(e => parseEvent(e))
  return parsed
}

export const parseEventsByEventType = (receipt: GetTransactionReceiptResponse, eventType: WorldEvents) => {
  const events = receipt.events.filter(e => e.keys[0] === eventType)
  const parsed = events.map(e => parseEvent(e))
  return parsed
}

export type ParseEventResult = ReturnType<typeof parseEvent>;

export const parseEvent = (raw: any) => {

  switch (raw.keys[0]) {
    case WorldEvents.GameCreated:
      return {
        eventType: WorldEvents.GameCreated,
        eventName: "GameCreated",
        gameId: num.toHexString(raw.keys[1]),
        playerId: num.toHexString(raw.keys[2]),
        gameMode: Number(raw.data[0]),
        playerName: shortString.decodeShortString(raw.data[1]),
        hustlerId: Number(raw.data[2]),
      } as GameCreatedData;

    case WorldEvents.Traveled:
      return {
        eventType: WorldEvents.Traveled,
        eventName: "Traveled",
        gameId: num.toHexString(raw.keys[1]),
        playerId: num.toHexString(raw.keys[2]),
        turn: Number(raw.data[0]),
        fromLocationId: Number(raw.data[1]),
        toLocationId: Number(raw.data[2]),
      } as TraveledData;


    case WorldEvents.TradeDrug:
      return {
        eventType: WorldEvents.TradeDrug,
        eventName: "TradeDrug",
        gameId: num.toHexString(raw.keys[1]),
        playerId: num.toHexString(raw.keys[2]),
        drugId: Number(raw.data[0]),
        quantity: Number(raw.data[1]),
        price: Number(raw.data[2]),
        isBuy: raw.data[3] === "0x0" ? false : true,
      } as TradeDrugData;


    case WorldEvents.HighVolatility:
      return {
        eventType: WorldEvents.HighVolatility,
        eventName: "HighVolatility",
        gameId: num.toHexString(raw.keys[1]),
        playerId: num.toHexString(raw.keys[2]),
        locationId: Number(raw.data[0]),
        drugId: Number(raw.data[1]),
        increase: raw.data[2] === "0x0" ? false : true,
      } as HighVolatilityData;


    case WorldEvents.UpgradeItem:
      return {
        eventType: WorldEvents.UpgradeItem,
        eventName: "UpgradeItem",
        gameId: num.toHexString(raw.keys[1]),
        playerId: num.toHexString(raw.keys[2]),
        itemSlot: Number(raw.data[0]),
        itemLevel: Number(raw.data[1]),
      } as UpgradeItemData;


    case WorldEvents.TravelEncounter:
      return {
        eventType: WorldEvents.TravelEncounter,
        eventName: "TravelEncounter",
        gameId: num.toHexString(raw.keys[1]),
        playerId: num.toHexString(raw.keys[2]),
        encounterId: Number(raw.data[0]),
        demandPct: Number(raw.data[1]),
        payout: Number(raw.data[2]),
      } as TravelEncounterData;


    case WorldEvents.TravelEncounterResult:
      // use gameContract to parseEvents  (Array<(u8,u8)>...)

      //@ts-ignore
      const parsedEvents = gameContract.parseEvents({
        events: [{
          from_address: gameContract.address,
          keys: [...raw.keys], // parseEvents consumes keys with iterators?
          data: [...raw.data], // parseEvents consumes data with iterators?
        }]
      })
      const parsed = parsedEvents[0]!["TravelEncounterResult"]!;

      return {
        eventType: WorldEvents.TravelEncounterResult,
        eventName: "TravelEncounterResult",
        gameId: num.toHexString(raw.keys[1]),
        playerId: num.toHexString(raw.keys[2]),
        action: Number(raw.data[0]) as EncountersAction,
        outcome: Number(raw.data[1]) as EncounterOutcomes,
        rounds: Number(raw.data[2]),
        //
        //@ts-ignore
        dmgDealt: parsed.dmg_dealt.map(i => ({ "0": Number(i[0]), "1": Number(i[1]) })),
        //@ts-ignore
        dmgTaken: parsed.dmg_taken.map(i => ({ "0": Number(i[0]), "1": Number(i[1]) })),
        cashEarnt: Number(parsed.cash_earnt),
        cashLoss: Number(parsed.cash_loss),
        drugId: Number(parsed.drug_id),
        //@ts-ignore
        drugLoss: parsed.drug_loss.map(i => Number(i)),
        turnLoss: Number(parsed.turn_loss),
        repPos: Number(parsed.rep_pos),
        repNeg: Number(parsed.rep_neg),

      } as TravelEncounterResultData;


    case WorldEvents.GameOver:
      return {
        eventType: WorldEvents.GameOver,
        eventName: "GameOver",
        gameId: num.toHexString(raw.keys[1]),
        playerId: num.toHexString(raw.keys[2]),
        leaderboardVersion: num.toHexString(raw.keys[3]),
        playerName: shortString.decodeShortString(raw.data[0]),
        avatarId: Number(raw.data[1]),
        turn: Number(raw.data[2]),
        cash: Number(raw.data[3]),
        health: Number(raw.data[4]),
        reputation: Number(raw.data[5]),
      } as GameOverData;


    // case WorldEvents.MeetOG:
    //   return {
    //     eventType: WorldEvents.MeetOG,
    //     eventName: "MeetOG",
    //     gameId: num.toHexString(raw.keys[1]),
    //     playerId: num.toHexString(raw.keys[2]),
    //     ogId: Number(raw.data[0]),
    //   } as MeetOGData


    default:
      // console.log(`event parse not implemented: ${raw.keys[0]}`)
      //throw new Error(`event parse not implemented: ${eventType}`);
      return {
        gameId: undefined,
        eventType: raw.keys[0],
        eventName: raw.keys[0],
      }
      break;
  }

}

