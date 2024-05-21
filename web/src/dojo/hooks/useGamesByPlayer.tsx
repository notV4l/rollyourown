import {
  Game,
  GameEdge,
  GameStorePacked,
  Maybe,
  World__Entity,
  World__EntityEdge,
  useGamesByPlayerQuery,
} from "@/generated/graphql";
import { useMemo } from "react";
import { GameClass } from "../class/Game";
import { useDojoContext } from "./useDojoContext";

export interface GamesByPlayerInterface {
  games: GameClass[];
  onGoingGames: GameClass[];
  endedGames: GameClass[];
  isFetched: boolean;
}


// TODO : change to get games by player by Season
export const useGamesByPlayer = (playerId: string): GamesByPlayerInterface => {
  const { data, isFetched } = useGamesByPlayerQuery({
    playerId,
  });

  const { configStore } = useDojoContext();

  const games = useMemo(() => {
    // const edges = data?.entities?.edges as World__EntityEdge[];
    // const nodes = (edges || []).map((i) => i.node);

    // const games = nodes.flatMap((i) => {
    //   const gameInfos = (i!.models || []).find((i) => i?.__typename === "Game") as Game;
    //   const gameStorePacked = (i!.models || []).find((i) => i?.__typename === "GameStorePacked") as GameStorePacked;

    //   if (!gameInfos || !gameStorePacked) return [];

    //   return [new GameClass(configStore, gameInfos, gameStorePacked)];
    // });

    // return games;
    return []
  }, [data]);

  const onGoingGames = useMemo(() => {
    return games.filter((i: GameClass) => !i.gameInfos.game_over); // TODO: filter by season
  }, [games]);

  const endedGames = useMemo(() => {
    return games.filter((i: GameClass) => i.gameInfos.game_over);
  }, [games]);

  return {
    games: games || [],
    onGoingGames: onGoingGames || [],
    endedGames: endedGames || [],
    isFetched,
  };
};
