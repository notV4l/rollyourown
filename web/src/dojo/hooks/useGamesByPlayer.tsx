import {
  Game,
  GameConfig,
  GameEdge,
  GameStorePacked,
  Maybe,
  SeasonSettings,
  World__Entity,
  World__EntityEdge,
  World__Event,
  World__EventEdge,
  useAllGameConfigQuery,
  useAllSeasonSettingsQuery,
  useGamesByPlayerQuery,
  useTravelEncounterByPlayerQuery,
  useTravelEncounterResultsByPlayerQuery,
} from "@/generated/graphql";
import { useMemo } from "react";
import { GameClass } from "../class/Game";
import { useDojoContext } from "./useDojoContext";
import { Hustler, Hustlers } from "@/components/hustlers";
import { WorldEvents } from "../generated/contractEvents";

export type PlayerStats = {
  totalGamesPlayed: number;
  totalGamesPaid: number;
  payRate: string;
  totalPaperClaimed: number;
  bestRanking: string;
  gamesByHustler: {
    [Hustlers.Dragon]: number;
    [Hustlers.Monkey]: number;
    [Hustlers.Rabbit]: number;
  };
  mostPlayedHustler: {
    [Hustlers.Dragon]: boolean;
    [Hustlers.Monkey]: boolean;
    [Hustlers.Rabbit]: boolean;
  };
  totalCopsEncounter: number;
  totalGangEncounter: number;
  totalFight: number;
  totalRun: number;
  totalPay: number;
};

export interface GamesByPlayerInterface {
  isFetched: boolean;
  games: GameClass[];
  onGoingGames: GameClass[];
  endedGames: GameClass[];
  playerStats?: PlayerStats;
}

// TODO : change to get games by player by Season
export const useGamesByPlayer = (playerId: string): GamesByPlayerInterface => {
  const { data, isFetched } = useGamesByPlayerQuery({
    playerId,
  });

  const { data: allSeasonSettings } = useAllSeasonSettingsQuery({});
  const { data: allGameConfig } = useAllGameConfigQuery({});

  const { data: allTravelEncounters } = useTravelEncounterByPlayerQuery({
    travelEncounterSelector: WorldEvents.TravelEncounter,
    playerId,
  });
  const { data: allTravelEncounterResults } = useTravelEncounterResultsByPlayerQuery({
    travelEncounterResultSelector: WorldEvents.TravelEncounterResult,
    playerId,
  });

  const { configStore } = useDojoContext();

  const games = useMemo(() => {
    if (!data || !allGameConfig || !allSeasonSettings) return [];

    const edges = data?.entities?.edges as World__EntityEdge[];
    const nodes = (edges || []).map((i) => i.node);

    const games = nodes.flatMap((i) => {
      const gameInfos = (i!.models || []).find((i) => i?.__typename === "Game") as Game;
      const gameStorePacked = (i!.models || []).find((i) => i?.__typename === "GameStorePacked") as GameStorePacked;

      if (!gameInfos || !gameStorePacked) return [];

      const seasonSettings = allSeasonSettings?.seasonSettingsModels?.edges?.find(
        (i) => i?.node?.season_version === gameInfos.season_version,
      )?.node as SeasonSettings;

      const gameConfig = allGameConfig?.gameConfigModels?.edges?.find(
        (i) => i?.node?.season_version === gameInfos.season_version,
      )?.node as GameConfig;

      return [new GameClass(configStore, gameInfos, seasonSettings, gameConfig, gameStorePacked)];
    });

    return games;
    return [];
  }, [data, allSeasonSettings, allGameConfig]);

  const onGoingGames = useMemo(() => {
    return games.filter((i: GameClass) => !i.gameInfos.game_over);
  }, [games]);

  const endedGames = useMemo(() => {
    return games.filter((i: GameClass) => i.gameInfos.game_over);
  }, [games]);

  const playerStats = useMemo(() => {
    if (!games || !allTravelEncounters || !allTravelEncounterResults) return undefined;

    //  return games.filter((i: GameClass) => i.gameInfos.game_over);
    const paidGames = games.filter((i: GameClass) => i.gameInfos.claimable > 0);
    const totalGamesPlayed = games.length;
    const totalGamesPaid = paidGames.length;
    const payRate = `${Number((totalGamesPaid / totalGamesPlayed) * 100).toFixed(2)}%`;
    const totalPaperClaimed = paidGames.map((i: GameClass) => i.gameInfos.claimable || 0).reduce((p, c) => p + c, 0);
    const orderedRanks = games
      .flatMap((i: GameClass) => (i.gameInfos.position > 0 ? [i.gameInfos.position] : []))
      .sort((a, b) => a - b);
    const bestRanking = orderedRanks.length > 0 ? orderedRanks[0] : "Noob";

    const dragonGames = games.filter((i: GameClass) => i.gameInfos.hustler_id === 0).length;
    const monkeyGames = games.filter((i: GameClass) => i.gameInfos.hustler_id === 1).length;
    const rabbitGames = games.filter((i: GameClass) => i.gameInfos.hustler_id === 2).length;

    const maxPlayed = Math.max(dragonGames, monkeyGames, rabbitGames);

    const totalCopsEncounter = (allTravelEncounters?.events?.edges || []).filter(
      (i) => i?.node?.data![0] === "0x436f7073",
    ).length;

    const totalGangEncounter = (allTravelEncounters?.events?.edges || []).filter(
      (i) => i?.node?.data![0] === "0x47616e67",
    ).length;

    const totalFight = (allTravelEncounterResults?.events?.edges || []).filter(
      (i) => i?.node?.data![0] === "0x2",
    ).length;
    const totalRun = (allTravelEncounterResults?.events?.edges || []).filter(
      (i) => i?.node?.data![0] === "0x0",
    ).length;
    const totalPay = (allTravelEncounterResults?.events?.edges || []).filter(
      (i) => i?.node?.data![0] === "0x1",
    ).length;
 

    const stats = {
      totalGamesPlayed,
      totalGamesPaid,
      payRate,
      totalPaperClaimed,
      bestRanking,
      gamesByHustler: {
        [Hustlers.Dragon]: dragonGames,
        [Hustlers.Monkey]: monkeyGames,
        [Hustlers.Rabbit]: rabbitGames,
      },
      mostPlayedHustler: {
        [Hustlers.Dragon]: dragonGames === maxPlayed,
        [Hustlers.Monkey]: monkeyGames === maxPlayed,
        [Hustlers.Rabbit]: rabbitGames === maxPlayed,
      },
      totalCopsEncounter,
      totalGangEncounter,
      totalFight,
      totalRun,
      totalPay,
    };

    return stats;
  }, [games, allTravelEncounters, allTravelEncounterResults]);

  return {
    games: games || [],
    onGoingGames: onGoingGames || [],
    endedGames: endedGames || [],
    playerStats: playerStats || undefined,
    isFetched,
  };
};
