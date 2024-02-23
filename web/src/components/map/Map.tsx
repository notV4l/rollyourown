import { GameClass } from "@/dojo/class/Game";
import { ConfigStore } from "@/dojo/stores/config";
import { Locations } from "@/dojo/types";
import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { Alert } from "../icons";
import { HitBox } from "./HitBox";
import { Outline } from "./Outline";
import { WantedMarkers } from "./WantedMarkers";
import { useConfigStore, useGameStore } from "@/dojo/hooks";

type CoordinateType = {
  [key in Locations]: { x: number; y: number };
};

const coordinate: CoordinateType = {
  [Locations.Home]: { x: 0, y: 0 },
  [Locations.Queens]: { x: -150, y: 150 },
  [Locations.Jersey]: { x: 150, y: 150 },
  [Locations.Bronx]: { x: 0, y: 300 },
  [Locations.Central]: { x: 0, y: 150 },
  [Locations.Coney]: { x: -150, y: -0 },
  [Locations.Brooklyn]: { x: 0, y: -0 },
};

const yOffset = -150;

export const Map = ({
  targetId,
  current,
  onSelect,
}: {
  targetId?: Locations;
  current?: Locations;
  onSelect: (selected: Locations) => void;
}) => {
  const [scope, animate] = useAnimate();
  const isMobile = useBreakpointValue([true, false]);

  const { game } = useGameStore();
  const configStore = useConfigStore();

  useEffect(() => {
    if (targetId !== undefined) {
      const point = coordinate[targetId] ? coordinate[targetId] : { x: 0, y: 0 };
      const animation = isMobile
        ? {
            scale: 1.5,
            x: point.x,
            y: point.y + yOffset,
          }
        : { scale: 1, x: 0, y: 0 };
      animate(
        scope.current,
        { ...animation },
        {
          ease: "easeInOut",
          duration: 0.5,
        },
      );
    }
  }, [targetId, isMobile, animate, scope]);

  return (
    <Flex
      userSelect="none"
      position="relative"
      w="inherit"
      as={motion.div}
      ref={scope}
      drag={isMobile}
      dragConstraints={{
        left: -150,
        right: 150,
        top: -150,
        bottom: 300,
      }}
      mt={12}
    >
      <Image src="/images/map/basemap.svg" position="absolute" top="0" left="0" boxSize="full" alt="ryo map" />

      {targetId && (
        <Outline
          targetId={targetId}
          current={current}
          wantedTarget={game.wanted.wantedByLocation.get(configStore.getLocationById(targetId)?.location) || 0}
          wantedCurrent={game.wanted.wantedByLocation.get(configStore.getLocationById(current)?.location) || 0}
        />
      )}
      <HitBox onSelect={onSelect} />
      {/* <Markers location={targetId} /> */}
      <WantedMarkers targetId={targetId} current={current} />
    </Flex>
  );
};
