import { Footer } from "@/components/Footer";
import { Bag, Event } from "@/components/icons";
import Layout from "@/components/Layout";
import { useDojoContext } from "@/dojo/hooks/useDojoContext";
import { useGameEntity } from "@/dojo/queries/useGameEntity";
import { usePlayerEntity } from "@/dojo/queries/usePlayerEntity";
import { getDrugByType, getLocationById, getOutcomeInfo } from "@/dojo/helpers";
import { TradeDirection, usePlayerStore } from "@/hooks/state";
import { useSystems } from "@/dojo/hooks/useSystems";

import {
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function Turn() {
  const router = useRouter();
  const gameId = router.query.gameId as string;
  const { account } = useDojoContext();
  const { player: playerEntity } = usePlayerEntity({
    gameId,
    address: account?.address,
  });
  const { game: gameEntity } = useGameEntity({
    gameId,
  });

  const { trades, lastEncounter, resetTurn } = usePlayerStore();
  const {getAvailableItems} = useSystems();
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    if (gameEntity && playerEntity) {
      // initial move, just forward user to location
      if (playerEntity.turn === 0) {
        const location = getLocationById(playerEntity.locationId);
        if(location){
          router.push(
            `/${gameId}/${location?.slug}`,
          );
        }
      }
    }
  }, [gameEntity, playerEntity, gameId, router]);

  useEffect(() => {
    const update = async()=> {
      const {items} = (await getAvailableItems(gameId)) || []
      setAvailableItems(items)
    }

    if (gameEntity && playerEntity) {
      update()
    }
  }, [gameEntity, playerEntity, gameId, getAvailableItems]);

  if (!playerEntity || !gameEntity || playerEntity.turn === playerEntity.max_turns) {
    return <></>;
  }

  return (
    <Layout
      leftPanelProps={{
        prefixTitle: "End of",
        title: `Day ${playerEntity.turn}`,
        imageSrc: "/images/sunset.png",
      }}
    >
      <VStack w="full" my={["none", "auto"]}>
        {trades.size > 0 && (
          <VStack w="full">
            <Product
              product="Product"
              quantity="Qty"
              cost="Value"
              icon={undefined}
              isHeader
            />
            <UnorderedList w="full" variant="underline">
              {Array.from(trades).map(([drug, trade]) => {
                const change =
                  trade.direction === TradeDirection.Buy ? "+" : "-";
                const drugInfo = getDrugByType(drug)!;
                return (
                  <ListItem key={drug}>
                    <Product
                      icon={drugInfo.icon}
                      product={drugInfo.name}
                      quantity={`${change}${trade.quantity}`}
                      cost={"$$$"}
                    />
                  </ListItem>
                );
              })}
            </UnorderedList>
          </VStack>
        )}
        <VStack w="full" pt="20px" align="flex-start">
          <Text fontFamily="broken-console" fontSize="10px" color="neon.500">
            Travel To
          </Text>
          <UnorderedList w="full" variant="underline">
            <ListItem>
              <HStack>
                {getLocationById(playerEntity.locationId)?.icon({})}
                <Text>{getLocationById(playerEntity.locationId)?.name}</Text>
              </HStack>
            </ListItem>
            {lastEncounter && (
              <ListItem>
                <HStack
                  color={
                    getOutcomeInfo(lastEncounter.status, lastEncounter.outcome)
                      .color
                  }
                >
                  <HStack flex="1">
                    <Event />
                    <Text>
                      {
                        getOutcomeInfo(
                          lastEncounter.status,
                          lastEncounter.outcome,
                        ).name
                      }
                    </Text>
                  </HStack>
                  <Text flex="1">
                    {
                      getOutcomeInfo(
                        lastEncounter.status,
                        lastEncounter.outcome,
                      ).description
                    }
                  </Text>
                </HStack>
              </ListItem>
            )}
          </UnorderedList>
        </VStack>
        <Footer position={["absolute", "relative"]}>
          <HStack gap="20px">

       


          {availableItems && availableItems.length > 0 && (
            <Button
                      w={["full", "auto"]}
                      onClick={() => {
                        router.push(
                          `/${gameId}/pawnshop`,
                        );
                      }}
                    >
                      Visit Pawnshop
                    </Button>
          )}

<Button
            w={["full", "auto"]}
            onClick={() => {
              resetTurn();
              router.push(
                `/${gameId}/${getLocationById(playerEntity.locationId)?.slug}`,
              );
            }}
          >
            Continue
          </Button>

          </HStack>
          
          

        </Footer>
      </VStack>
    </Layout>
  );
}

const Product = ({
  icon,
  product,
  quantity,
  cost,
  isHeader,
}: {
  icon: React.FC | undefined;
  product: string;
  quantity: number | string;
  cost: number | string;
  isHeader?: boolean;
}) => {
  const header = isHeader && {
    fontFamily: "broken-console",
    fontSize: "10px",
    color: "neon.500",
  };

  return (
    <HStack w="full" {...header}>
      <HStack flex="4">
        {icon && icon({ boxSize: "24px" })}
        <Text>{product}</Text>
      </HStack>
      <Text flex="3" textAlign="right">
        {cost}
      </Text>
      <HStack flex="3" justify="right">
        <Bag />
        <Text>{quantity}</Text>
      </HStack>
    </HStack>
  );
};
