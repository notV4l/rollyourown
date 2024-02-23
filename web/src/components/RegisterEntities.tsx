import { DojoEvent } from "@/dojo/class/Events";
import { HighVolatilityData } from "@/dojo/events";
import { WorldEvents } from "@/dojo/generated/contractEvents";
import { useConfigStore, useDojoContext, useRouterContext } from "@/dojo/hooks";
import { useGameStore } from "@/dojo/hooks/useGameStore";
import { ConfigStore } from "@/dojo/stores/config";
import { ToastType, useToast } from "@/hooks/toast";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { OG } from "./OG";
import { Siren, Truck } from "./icons";

const RegisterEntities = () => {
  const { gameId, router } = useRouterContext();

  const { account } = useDojoContext();
  const configStore = useConfigStore();
  const gameStore = useGameStore();
  const { game, gameEvents } = gameStore;

  const [ogId, setOgId] = useState();
  const [lastEvent, setLastEvent] = useState<DojoEvent | undefined>();
  const toaster = useToast();

  useEffect(() => {
    configStore && configStore.init();

    if (gameStore) {
      if (gameId && account?.address) {
        gameStore.init(gameId, account?.address);
      }

      if (!gameId) {
        gameStore.reset();
      }
    }
  }, [gameId, account?.address]);

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

      case WorldEvents.MeetOG:
        const meetOgEvent = last.parsed as MeetOGData;
        setOgId(meetOgEvent.ogId);
        setTimeout(() => {
          setOgId(undefined);
        }, 10_000);
        break;

      case WorldEvents.HighVolatility:
        const volatilityEvent = last.parsed as HighVolatilityData;
        displayHighVolatility(volatilityEvent, toaster, configStore);
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
};

export default RegisterEntities;

const displayHighVolatility = (event: HighVolatilityData, toaster: ToastType, configStore: ConfigStore) => {
  const location = configStore.getLocationById(event.locationId);
  const drug = configStore.getDrugById(event.drugId);
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
