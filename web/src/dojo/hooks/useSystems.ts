import { useToast } from "@/hooks/toast";
import { getEvents } from "@dojoengine/utils";
import { useCallback, useState } from "react";
import { BigNumberish, Call, GetTransactionReceiptResponse, uint256 } from "starknet";
import { PendingCall, pendingCallToCairoEnum } from "../class/Game";
import { BaseEventData, GameCreatedData, HighVolatilityData, TravelEncounterData, TravelEncounterResultData, parseAllEvents } from "../events";
import { WorldEvents } from "../generated/contractEvents";
import { EncountersAction, GameMode, Locations } from "../types";
import { useConfigStore } from "./useConfigStore";
import { useDojoContext } from "./useDojoContext";

export interface SystemsInterface {
  createGame: (gameMode: number, hustlerId: number, playerName: string) => Promise<SystemExecuteResult>;
  travel: (gameId: string, locationId: Locations, actions: Array<PendingCall>) => Promise<SystemExecuteResult>;
  endGame: (gameId: string, actions: Array<PendingCall>) => Promise<SystemExecuteResult>;
  decide: (gameId: string, action: EncountersAction) => Promise<SystemExecuteResult>;

  failingTx: () => Promise<SystemExecuteResult>;
  feedLeaderboard: (count: number) => Promise<SystemExecuteResult>;

  isPending: boolean;
  error?: string;
}

export interface SystemExecuteResult {
  hash: string;
  isGameOver?: BaseEventData;
  event?: BaseEventData;
  events?: BaseEventData[];
  [key: string]: any;
}

export type DojoCall = {
  contractName: string;
  functionName: string;
  callData: BigNumberish[];
}



const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const tryBetterErrorMsg = (msg: string): string => {

  const failureReasonIndex = msg.indexOf("Failure reason")
  if (failureReasonIndex > 0) {
    let betterMsg = msg.substring(failureReasonIndex)
    const cairoTracebackIndex = betterMsg.indexOf("Cairo traceback")
    betterMsg = betterMsg.substring(0, cairoTracebackIndex)
    return betterMsg
  }

  return msg;

}

export const useSystems = (): SystemsInterface => {
  const {
    account,
    dojoProvider,
    configStore
  } = useDojoContext();

  const { config } = useConfigStore();

  const { toast, clear: clearToasts } = useToast();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const executeAndReceipt = useCallback(
    async (params: DojoCall | Call[]): Promise<{
      hash: string;
      receipt: GetTransactionReceiptResponse;
      events: any[];
      parsedEvents: any[];
    }> => {

      setError(undefined)
      setIsPending(true)

      let tx, receipt;
      try {
        if (!Array.isArray(params)) {
          tx = await dojoProvider.execute(account, params.contractName, params.functionName, params.callData);
        } else {
          tx = await dojoProvider.executeMulti(account, params)
        }

        toast({
          message: `tx sent ${tx.transaction_hash.substring(0, 4)}...${tx.transaction_hash.slice(-4)}`,
          duration: 5_000,
          isError: false
        })

        //
        // TODO : remove later
        //
        await sleep(1_500);
        clearToasts()

        receipt = await account!.waitForTransaction(tx.transaction_hash, {
          retryInterval: 200,
        });
      } catch (e: any) {
        setIsPending(false)
        setError(e.toString())
        toast({
          message: tryBetterErrorMsg(e.toString()),
          duration: 20_000,
          isError: true
        })
        throw Error(e.toString())
      }

      if (receipt.execution_status === "REVERTED") {
        setError("Transaction Reverted")
        setIsPending(false)

        toast({
          message: tryBetterErrorMsg(receipt.revert_reason || 'Transaction Reverted'),
          duration: 20_000,
          isError: true
        })
        throw Error(receipt.revert_reason || 'Transaction Reverted')
      }

      const events = getEvents(receipt);
      const parsedEvents = parseAllEvents(receipt);


      setIsPending(false)

      return {
        hash: tx?.transaction_hash,
        receipt,
        events,
        parsedEvents,
      };


    },
    [dojoProvider, account, toast, clearToasts],
  );




  const createGame = useCallback(
    async (gameMode: GameMode, hustlerId: number, playerName: string,) => {

      const paperFee = config?.ryo.paper_fee * 10 ** 18;
      const paperAddress = config?.ryo.paper_address;
      const gameAddress = dojoProvider.manifest.contracts.find(i => i.name === "rollyourown::systems::game::game").address;
      // 
      const approvalCall: Call = {
        contractAddress: paperAddress,
        entrypoint: "approve",
        calldata: [gameAddress, uint256.bnToUint256(paperFee)]
      }

      const createGameCall = {
        contractAddress: gameAddress,
        entrypoint: "create_game",
        calldata: [gameMode, hustlerId, playerName]
      }

      const { hash, events, parsedEvents } = await executeAndReceipt([approvalCall, createGameCall]);

      const gameCreated = parsedEvents.find(
        (e) => e.eventType === WorldEvents.GameCreated,
      ) as GameCreatedData;

      return {
        hash,
        gameId: gameCreated.gameId,
      };
    },
    [executeAndReceipt, config?.ryo.paper_address],
  );



  const travel = useCallback(
    async (gameId: string, location: Locations, calls: Array<PendingCall>) => {

      const callsEnum = calls.map(pendingCallToCairoEnum)
      const { hash, events, parsedEvents } = await executeAndReceipt(
        {
          contractName: "rollyourown::systems::game::game",
          functionName: "travel",
          // @ts-ignore
          callData: [gameId, location, callsEnum],
        }
      );

      const isGameOver = parsedEvents
        .find((e) => e.eventType === WorldEvents.GameOver)

      const travelEncounter = parsedEvents.find(
        (e) => e.eventType === WorldEvents.TravelEncounter,
      ) as TravelEncounterData


      return {
        hash,
        isGameOver,
        event: travelEncounter,
        events: parsedEvents
          .filter((e) => e.eventType === WorldEvents.HighVolatility)
          .map((e) => e as HighVolatilityData),
      };
    },
    [executeAndReceipt],
  );


  const endGame = useCallback(
    async (gameId: string, calls: Array<PendingCall>) => {
      const callsEnum = calls.map(pendingCallToCairoEnum)

      const { hash, events, parsedEvents } = await executeAndReceipt(
        {
          contractName: "rollyourown::systems::game::game",
          functionName: "end_game",
          // @ts-ignore
          callData: [gameId, callsEnum],
        }
      );

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );


  const decide = useCallback(
    async (gameId: string, action: EncountersAction) => {

      const { hash, events, parsedEvents } = await executeAndReceipt(
        {
          contractName: "rollyourown::systems::game::game",
          functionName: "decide",
          callData: [gameId, action],
        }
      );

      const isGameOver = parsedEvents
        .find((e) => e.eventType === WorldEvents.GameOver)

      const travelEncounterResult = parsedEvents.find(
        (e) => e.eventType === WorldEvents.TravelEncounterResult,
      ) as TravelEncounterResultData

      return {
        hash,
        isGameOver,
        event: travelEncounterResult,
        events: parsedEvents
          .filter((e) => e.eventType === WorldEvents.HighVolatility)
          .map((e) => e as HighVolatilityData),
      };


    },
    [executeAndReceipt],
  );


  //
  //
  //


  const feedLeaderboard = useCallback(
    async (count: number) => {
      const { hash, events, parsedEvents } = await executeAndReceipt(
        {
          contractName: "rollyourown::systems::devtools::devtools",
          functionName: "feed_leaderboard",
          callData: [count],
        }
      );

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );


  const failingTx = useCallback(
    async () => {
      const { hash, events, parsedEvents } = await executeAndReceipt(
        {
          contractName: "rollyourown::systems::devtools::devtools",
          functionName: "failing_tx",
          callData: [],
        }
      );

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );




  return {
    createGame,
    travel,
    endGame,
    decide,
    //
    feedLeaderboard,
    failingTx,
    //
    error,
    isPending,
  };
};
