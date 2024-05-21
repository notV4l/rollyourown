import { DojoEvent } from "@/dojo/class/Events";
import { HighVolatilityData } from "@/dojo/events";
import { WorldEvents } from "@/dojo/generated/contractEvents";
import { useConfigStore, useDojoContext, useGameStore, useRouterContext } from "@/dojo/hooks";
import { ConfigStoreClass } from "@/dojo/stores/config";
import { ToastType, useToast } from "@/hooks/toast";
import { Box } from "@chakra-ui/react";
import { useAccount } from "@starknet-react/core";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Siren, Truck } from "./icons";
import { OG } from "./layout";
import { GameClass } from "@/dojo/class/Game";

const RegisterEntities = observer(() => {
  const { gameId, router, playerId } = useRouterContext();

  const {
    chains: { selectedChain },
  } = useDojoContext();
  const { account } = useAccount();

  const configStore = useConfigStore();
  const gameStore = useGameStore();
  const { game, gameEvents } = gameStore;

  const [ogId, setOgId] = useState<number | undefined>();
  const [lastEvent, setLastEvent] = useState<DojoEvent | undefined>();
  const toaster = useToast();

  useEffect(() => {
    console.log("RegisterEntities", gameId);

    if (gameStore && gameId) {
      gameStore.init(gameId);
    } else {
      gameStore.reset();
    }
  }, [gameId, gameStore]);

  //
  useEffect(() => {
    if (!(configStore && gameId && gameEvents && gameEvents.sortedEvents && gameEvents.sortedEvents.length > 0)) return;
    const last = gameEvents?.sortedEvents[gameEvents?.sortedEvents.length - 1];

    if (last === lastEvent) {
      //already handled
      return;
    }
    setLastEvent(last);

    //let target = router.asPath;

    switch (last.raw.keys[0]) {
      // case WorldEvents.Traveled:
      //   const travelEvent = last.parsed as TraveledData;
      //   const location = configStore.getLocationById(travelEvent.toLocationId);
      //   target = `/${gameId}/${location.location}`;

      //   break;

      // case WorldEvents.TravelEncounter:
      //   //let encounterEvent = last.parsed as TravelEncounterData;
      //   target = `/${gameId}/event/decision`;
      //   break;

      // case WorldEvents.MeetOG:
      //   // const meetOgEvent = last.parsed as MeetOGData;
      //   // setOgId(meetOgEvent.ogId);
      //   // setTimeout(() => {
      //   //   setOgId(undefined);
      //   // }, 10_000);
      //   break;

      case WorldEvents.HighVolatility:
        const volatilityEvent = last.parsed as HighVolatilityData;
        displayHighVolatility(volatilityEvent, toaster, game);
        break;

      default:
        break;
    }

    // if (router.asPath !== target && !router.asPath.startsWith(target)) {
    //   router.push(target);
    // }
  }, [configStore, gameId, gameEvents, gameEvents?.sortedEvents, router, router.isReady]);

  if (!ogId) return null;

  return (
    <Box position="fixed" h="300px" w="300px" bottom="0" left="0" zIndex={99} title={`OG #${ogId}`}>
      <OG id={ogId} />
    </Box>
  );
});

export default RegisterEntities;

const displayHighVolatility = (event: HighVolatilityData, toaster: ToastType, game: GameClass) => {
  const location = game.configStore.getLocationById(event.locationId);
  const drug = game.configStore.getDrugById(game.seasonSettings.drugs_mode, event.drugId);
  const msg = event.increase
    ? `Pigs seized ${drug!.name} in ${location!.name}`
    : `A shipment of ${drug!.name} has arrived to ${location!.name}`;
  const icon = event.increase ? Siren : Truck;
  toaster.toast({
    message: msg,
    icon: icon,
    duration: 6000,
  });
};
