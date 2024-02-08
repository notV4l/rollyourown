import { getEntityIdFromKeys } from "@dojoengine/utils";
import { GraphQLClient } from "graphql-request";
import { Client } from "graphql-ws";
import { StoreApi, createStore } from "zustand";

import {
  Game,
  GameByIdDocument,
  GameByIdQuery,
  GameStorePacked,
  GameStorePackedDocument,
  GameStorePackedQuery,
  GameStorePackedSubscriptionDocument,
  World__EntityEdge,
  World__ModelEdge,
  World__Subscription,
} from "@/generated/graphql";
import { GameClass } from "../class/Game";
import { ConfigStore } from "./config";

export interface GameStore {
  client: GraphQLClient;
  wsClient: Client;
  configStore: StoreApi<ConfigStore>;
  id: string | null;
  game: GameClass | null;
  gameInfos: Game | null;
  handles: Array<() => void>;
  init: (gameId: string, playerId: string) => void;
  subscribe: (gameId: string, playerId: string) => void;
  execute: (gameId: string, playerId: string) => void;
  reset: () => void;
}

type GameStoreProps = {
  client: GraphQLClient;
  wsClient: Client;
  configStore: StoreApi<ConfigStore>;
};

export const createGameStore = ({ client, wsClient, configStore }: GameStoreProps) => {
  return createStore<GameStore>((set, get) => ({
    client,
    wsClient,
    configStore,
    id: null,
    game: null,
    gameInfos: null,
    handles: [],
    init: (gameId: string, playerId: string) => {
      if (get().id === null) {
        get().subscribe(gameId, playerId);
      }
    },
    reset: () => {
      for (let unsubscribe of get().handles) {
        unsubscribe();
      }
      set({ id: null, game: null, handles: [] });
    },
    subscribe: async (gameId: string, playerId: string) => {
      const { wsClient, handles } = get();
      const id = getEntityIdFromKeys([BigInt(gameId), BigInt(playerId)]);

      await get().execute(gameId, playerId);

      handles.push(
        wsClient.subscribe(
          {
            query: GameStorePackedSubscriptionDocument,
            variables: {
              id,
            },
          },
          {
            next: ({ data }) => {
              return onGameStorePacked({ set, data, configStore });
            },
            error: (error) => console.log({ error }),
            complete: () => console.log("complete"),
          },
        ),
      );

      set({ id: id, handles: handles });
    },
    execute: async (gameId: string, playerId: string) => {
      // gameInfos dont change, no need to subscribe to updates
      const gameInfosData = (await client.request(GameByIdDocument, {
        gameId: Number(gameId),
      })) as GameByIdQuery;

      const gameData = (await client.request(GameStorePackedDocument, {
        gameId: gameId,
        playerId: playerId,
      })) as GameStorePackedQuery;

      // parse gameInfosData
      const gameEdges = gameInfosData!.gameModels!.edges as World__ModelEdge;
      if (!gameEdges || !gameEdges[0] || !gameEdges[0].node) return;
      let gameInfos = gameEdges[0].node as Game;
      if (!gameInfos) return;

      // parse gameData
      const edges = gameData!.entities!.edges as World__EntityEdge[];
      if (!edges || !edges[0] || !edges[0].node || !edges[0].node.models) return;

      let gameStorePacked = edges[0]?.node.models.find((i) => i?.__typename === "GameStorePacked") as GameStorePacked;
      if (!gameStorePacked) return;

      const game = new GameClass(configStore.getState(), gameStorePacked);
      set({ game, gameInfos });
    },
  }));
};

const onGameStorePacked = ({
  set,
  data,
  configStore,
}: {
  data: World__Subscription;
  configStore: StoreApi<ConfigStore>;
}) => {
  if (!data?.entityUpdated?.models) return;

  let gameStorePacked = data?.entityUpdated?.models.find((i) => i?.__typename === "GameStorePacked") as GameStorePacked;
  if (gameStorePacked) {
    set((state) => ({
      game: new GameClass(configStore.getState(), gameStorePacked),
    }));
  }
};