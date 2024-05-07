import { DrugConfig, EncounterConfig, GameConfig } from "@/generated/graphql";
import { useToast } from "@/hooks/toast";
import { getEvents } from "@dojoengine/utils";
import { useAccount } from "@starknet-react/core";
import { useCallback, useState } from "react";
import { AllowArray, Call, CallData, GetTransactionReceiptResponse, shortString, uint256 } from "starknet";
import { PendingCall, pendingCallToCairoEnum } from "../class/Game";
import {
  BaseEventData,
  GameCreatedData,
  HighVolatilityData,
  TravelEncounterData,
  TravelEncounterResultData,
  parseAllEvents,
} from "../events";
import { WorldEvents } from "../generated/contractEvents";
import { EncountersAction, GameMode, Locations } from "../types";
import { useConfigStore } from "./useConfigStore";
import { useDojoContext } from "./useDojoContext";
import { DojoCall } from "@dojoengine/core";
// import { getContractByName } from "@dojoengine/core";

export interface SystemsInterface {
  createGame: (gameMode: number, hustlerId: number, playerName: string) => Promise<SystemExecuteResult>;
  endGame: (gameId: string, actions: Array<PendingCall>) => Promise<SystemExecuteResult>;
  registerScore: (gameId: string, prevGameId: string, prevPlayerId: string) => Promise<SystemExecuteResult>;
  travel: (gameId: string, locationId: Locations, actions: Array<PendingCall>) => Promise<SystemExecuteResult>;
  decide: (gameId: string, action: EncountersAction) => Promise<SystemExecuteResult>;
  // ryo
  setPaused: (paused: boolean) => Promise<SystemExecuteResult>;
  setPaperFee: (fee: number) => Promise<SystemExecuteResult>;
  setTreasuryFeePct: (fee: number) => Promise<SystemExecuteResult>;
  setLeaderboardDuration: (duration: number) => Promise<SystemExecuteResult>;
  // config
  updateGameConfig: (gameConfig: GameConfig) => Promise<SystemExecuteResult>;
  updateDrugConfig: (drugConfig: DrugConfig) => Promise<SystemExecuteResult>;
  updateEncounterConfig: (encounterConfig: EncounterConfig) => Promise<SystemExecuteResult>;

  // laundromat
  claim: (season: number, gameIds: number[]) => Promise<SystemExecuteResult>;
  claimTreasury: () => Promise<SystemExecuteResult>;
  launder: (season: number) => Promise<SystemExecuteResult>;

  // dev
  failingTx: () => Promise<SystemExecuteResult>;
  feedLeaderboard: (count: number) => Promise<SystemExecuteResult>;
  createFakeGame: (finalScore: number) => Promise<SystemExecuteResult>;

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

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const tryBetterErrorMsg = (msg: string): string => {
  const failureReasonIndex = msg.indexOf("Failure reason");
  if (failureReasonIndex > 0) {
    let betterMsg = msg.substring(failureReasonIndex);
    const cairoTracebackIndex = betterMsg.indexOf("Cairo traceback");
    betterMsg = betterMsg.substring(0, cairoTracebackIndex);
    return betterMsg;
  }

  return msg;
};

export const useSystems = (): SystemsInterface => {
  const {
    clients: { dojoProvider, rpcProvider },
    chains: {
      selectedChain,
      selectedChain: { manifest },
    },
    configStore,
  } = useDojoContext();

  const { account } = useAccount();
  const { config } = useConfigStore();

  const { toast, clear: clearToasts } = useToast();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  //
  //
  //

  const executeAndReceipt = useCallback(
    async (
      params: AllowArray<DojoCall | Call>,
    ): Promise<{
      hash: string;
      receipt: GetTransactionReceiptResponse;
      events: any[];
      parsedEvents: any[];
    }> => {
      if (!account) {
        toast({
          message: `not connected`,
          duration: 5_000,
          isError: true,
        });
      }

      // override wallet (ArgentX / Braavos) default providers..
      // @ts-ignore
      account.provider = rpcProvider;
      // @ts-ignore
      account.chainId = await rpcProvider.getChainId();

      setError(undefined);
      setIsPending(true);

      let tx, receipt;

      try {
        tx = await dojoProvider.execute(account!, params);

        // toast({
        //   message: `tx sent ${tx.transaction_hash.substring(0, 4)}...${tx.transaction_hash.slice(-4)}`,
        //   duration: 5_000,
        //   isError: false
        // })

        receipt = await account!.waitForTransaction(tx.transaction_hash, {
          retryInterval: 500,
        });

        // chill waiting torii indexing
        await sleep(1000);
      } catch (e: any) {
        setIsPending(false);
        setError(e.toString());
        toast({
          message: tryBetterErrorMsg(e.toString()),
          duration: 20_000,
          isError: true,
        });
        throw Error(e.toString());
      }

      if (receipt) {
        let receipt_error = undefined;
        // if ("status" in receipt && receipt.status === "REJECTED") {
        //   receipt_error = {
        //     status: "REJECTED",
        //     message: (receipt as RejectedTransactionReceiptResponse).transaction_failure_reason.error_message
        //   }
        // }

        if ("execution_status" in receipt && receipt.execution_status === "REVERTED") {
          receipt_error = {
            status: "REVERTED",
            message: receipt.revert_reason || "REVERTED",
          };
        }

        if (receipt_error) {
          setError(`Transaction ${receipt_error.status}`);

          toast({
            message: tryBetterErrorMsg(receipt_error.message || ""),
            duration: 20_000,
            isError: true,
          });
        }
      }

      const events = getEvents(receipt);
      const parsedEvents = parseAllEvents(receipt);

      setIsPending(false);

      return {
        hash: tx?.transaction_hash,
        receipt,
        events,
        parsedEvents,
      };
    },
    [dojoProvider, account, toast],
  );

  const createGame = useCallback(
    async (gameMode: GameMode, hustlerId: number, playerName: string) => {
      const paperFee = config?.ryo.paper_fee * 10 ** 18;
      const paperAddress = config?.ryoAddress.paper;
      const gameAddress = dojoProvider.manifest.contracts.find(
        (i: any) => i.name === "rollyourown::systems::game::game",
      ).address;

      //
      const approvalCall: Call = {
        contractAddress: paperAddress,
        entrypoint: "approve",
        calldata: CallData.compile({ gameAddress, amount: uint256.bnToUint256(paperFee) }),
      };

      const createGameCall = {
        contractName: "rollyourown::systems::game::game",
        //  contractAddress: gameAddress,
        entrypoint: "create_game",
        calldata: [gameMode, hustlerId, shortString.encodeShortString(playerName)],
      };

      const { hash, events, parsedEvents } = await executeAndReceipt([approvalCall, createGameCall]);

      const gameCreated = parsedEvents.find((e) => e.eventType === WorldEvents.GameCreated) as GameCreatedData;

      return {
        hash,
        gameId: gameCreated.gameId,
      };
    },
    [executeAndReceipt, config?.ryoAddress.paper],
  );

  const endGame = useCallback(
    async (gameId: string, calls: Array<PendingCall>) => {
      const callsEnum = calls.map(pendingCallToCairoEnum);

      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::game::game",
        entrypoint: "end_game",
        // @ts-ignore
        calldata: CallData.compile({ gameId, callsEnum }),
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const registerScore = useCallback(
    async (gameId: string, prevGameId: string, prevPlayerId: string) => {
      const { hash } = await executeAndReceipt({
        contractName: "rollyourown::systems::game::game",
        entrypoint: "register_score",
        // @ts-ignore
        calldata: [gameId, prevGameId, prevPlayerId],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const travel = useCallback(
    async (gameId: string, location: Locations, calls: Array<PendingCall>) => {
      const callsEnum = calls.map(pendingCallToCairoEnum);
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::game::game",
        entrypoint: "travel",
        // @ts-ignore
        //  calldata: [gameId, location, callsEnum],
        calldata: CallData.compile({ gameId, location, callsEnum }),
      });

      const isGameOver = parsedEvents.find((e) => e.eventType === WorldEvents.GameOver);

      const travelEncounter = parsedEvents.find(
        (e) => e.eventType === WorldEvents.TravelEncounter,
      ) as TravelEncounterData;

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

  const decide = useCallback(
    async (gameId: string, action: EncountersAction) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::game::game",
        entrypoint: "decide",
        calldata: [gameId, action],
      });

      const isGameOver = parsedEvents.find((e) => e.eventType === WorldEvents.GameOver);

      const travelEncounterResult = parsedEvents.find(
        (e) => e.eventType === WorldEvents.TravelEncounterResult,
      ) as TravelEncounterResultData;

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
  // LAUNDROMAT
  //

  const claim = useCallback(
    async (season: number, gameIds: number[]) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::laundromat::laundromat",
        entrypoint: "claim",
        calldata: [season, game_ids],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const claimTreasury = useCallback(async () => {
    const { hash, events, parsedEvents } = await executeAndReceipt({
      contractName: "rollyourown::systems::laundromat::laundromat",
      entrypoint: "claim_treasury",
      calldata: [],
    });

    return {
      hash,
    };
  }, [executeAndReceipt]);

  const launder = useCallback(
    async (season: number) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::laundromat::laundromat",
        entrypoint: "launder",
        calldata: [season],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  //
  //
  //

  const setPaused = useCallback(
    async (paused: boolean) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::ryo::ryo",
        entrypoint: "set_paused",
        calldata: [paused ? 0 : 1],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const setPaperFee = useCallback(
    async (paperFee: number) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::ryo::ryo",
        entrypoint: "set_paper_fee",
        calldata: [paperFee],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const setTreasuryFeePct = useCallback(
    async (treasuryFeePct: number) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::ryo::ryo",
        entrypoint: "set_treasury_fee_pct",
        calldata: [treasuryFeePct],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const setLeaderboardDuration = useCallback(
    async (duration: number) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::ryo::ryo",
        entrypoint: "set_leaderboard_duration",
        calldata: [duration],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const updateGameConfig = useCallback(
    async (gameConfig: GameConfig) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::config::config::config",
        entrypoint: "update_game_config",
        calldata: [gameConfig],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const updateDrugConfig = useCallback(
    async (drugConfig: DrugConfig) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::config::config::config",
        entrypoint: "update_drug_config",
        calldata: [drugConfig],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  //
  //
  //

  const updateEncounterConfig = useCallback(
    async (encounterConfig: EncounterConfig) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::config::config::config",
        entrypoint: "update_encounter_config",
        calldata: [encounterConfig],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  //
  //
  //

  const createFakeGame = useCallback(
    async (finalScore = 0) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::devtools::devtools",
        entrypoint: "create_fake_game",
        calldata: [finalScore],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const feedLeaderboard = useCallback(
    async (count: number) => {
      const { hash, events, parsedEvents } = await executeAndReceipt({
        contractName: "rollyourown::systems::devtools::devtools",
        entrypoint: "feed_leaderboard",
        calldata: [count],
      });

      return {
        hash,
      };
    },
    [executeAndReceipt],
  );

  const failingTx = useCallback(async () => {
    const { hash, events, parsedEvents } = await executeAndReceipt({
      contractName: "rollyourown::systems::devtools::devtools",
      entrypoint: "failing_tx",
      calldata: [],
    });

    return {
      hash,
    };
  }, [executeAndReceipt]);

  return {
    createGame,
    endGame,
    registerScore,
    travel,
    decide,
    //
    claim,
    claimTreasury,
    launder,
    //
    setPaused,
    setPaperFee,
    setTreasuryFeePct,
    setLeaderboardDuration,
    //
    updateGameConfig,
    updateDrugConfig,
    updateEncounterConfig,
    //
    feedLeaderboard,
    failingTx,
    createFakeGame,
    //
    error,
    isPending,
  };
};
