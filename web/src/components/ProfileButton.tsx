import {
  Text,
  VStack,
  HStack,
  Divider,
  Card,
  Heading,
  Image,
  Box,
  Link as ChakraLink,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  MenuItem,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { playSound, Sounds } from "@/hooks/sound";
import Dot from "./Dot";
import { useDojoContext } from "@/dojo/hooks/useDojoContext";
import { Avatar } from "./avatar/Avatar";
import { genAvatarFromAddress, genAvatarFromId } from "./avatar/avatars";
import { headerStyles, headerButtonStyles } from "@/theme/styles";
import { Calendar } from "./icons/archive";
import { ItemTextEnum } from "@/dojo/types";
import { PlayerEntity, ShopItem } from "@/dojo/queries/usePlayerEntity";
import { getShopItem, getShopItemStatname } from "@/dojo/helpers";
import { Dots, Twitter } from "./icons";
import { formatCash } from "@/utils/ui";
import Link from "next/link";
import { SCALING_FACTOR } from "@/dojo/constants";
import HealthIndicator from "./player/HealthIndicator";
import WantedIndicator from "./player/WantedIndicator";
import CashIndicator from "./player/CashIndicator";
import ShareButton from "./ShareButton";

const Profile = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  const { account, playerEntityStore } = useDojoContext();
  const { playerEntity } = playerEntityStore;

  const [attackItem, setAttackItem] = useState<ShopItem | undefined>(undefined);
  const [defenseItem, setDefenseItem] = useState<ShopItem | undefined>(undefined);
  const [speedItem, setSpeedItem] = useState<ShopItem | undefined>(undefined);
  const [transportItem, setTransportItem] = useState<ShopItem | undefined>(undefined);

  useEffect(() => {
    if (!playerEntity) return;
    setAttackItem(playerEntity.items.find((i) => i.id === ItemTextEnum.Attack));
    setDefenseItem(playerEntity.items.find((i) => i.id === ItemTextEnum.Defense));
    setSpeedItem(playerEntity.items.find((i) => i.id === ItemTextEnum.Speed));
    setTransportItem(playerEntity.items.find((i) => i.id === ItemTextEnum.Transport));
  }, [playerEntity]);

  if (!account || !playerEntity) return null;

  return (
    <Modal isOpen={isOpen} onClose={close} isCentered>
      <ModalOverlay />
      <ModalContent maxH="90vh" maxWidth={"420px"}>
        <ModalHeader pt="30px">
          <VStack w="full">
            <Heading fontFamily="dos-vga" fontWeight="normal" fontSize="24px">
              {playerEntity.name}
            </Heading>
            <HStack color="neon.500">
              <Calendar /> <Text>DAY {playerEntity.turn}</Text>
            </HStack>
          </VStack>
        </ModalHeader>
        <ModalBody justifyContent="center">
          <VStack w="full">
            <HStack w="full" fontSize="14px">
              <Card flex={1}>
              <Avatar name={genAvatarFromId(playerEntity.avatarId)} w="80px" h="80px" />
              </Card>
              <Card flex={3}>
                <HStack w="full" gap="0">
                  <VStack w="full" align="flex-start" gap="0">
                    <CashIndicator cash={playerEntity?.cash} h="40px" w="full" ml="8px" />
                    <Divider
                      orientation="horizontal"
                      borderTopWidth="1px"
                      borderBottomWidth="1px"
                      borderColor="neon.600"
                    />
                    <CashIndicator cash={420} h="40px" w="full" ml="8px" />
                  </VStack>
                  <Divider orientation="vertical" h="80px" borderWidth="1px" borderColor="neon.600" />

                  <VStack w="110px" align="flex-start" gap="0">
                    <HealthIndicator health={playerEntity?.health} h="40px" w="full" ml="8px" />
                    <Divider
                      orientation="horizontal"
                      w="full"
                      borderTopWidth="1px"
                      borderBottomWidth="1px"
                      borderColor="neon.600"
                    />
                    <WantedIndicator wanted={playerEntity?.wanted} h="40px" w="full" ml="8px" />
                  </VStack>
                </HStack>
              </Card>
            </HStack>

            <Card w="full">
              <HStack w="full" alignItems="center" justify="space-evenly" h="40px" fontSize="12px">
                <HStack flex="1" justify="center" color={attackItem ? "yellow.400" : "neon.400"}>
                  <Text opacity={0.5}>{getShopItemStatname(ItemTextEnum.Attack)}:</Text>
                  <Text>{attackItem?.value || 0}</Text>
                </HStack>
                <HStack flex="1" justify="center" color={defenseItem ? "yellow.400" : "neon.400"}>
                  <Text opacity={0.5}>{getShopItemStatname(ItemTextEnum.Defense)}:</Text>
                  <Text> {defenseItem?.value || 0}</Text>
                </HStack>
                <HStack flex="1" justify="center" color={speedItem ? "yellow.400" : "neon.400"}>
                  <Text opacity={0.5}>{getShopItemStatname(ItemTextEnum.Speed)}:</Text>
                  <Text> {speedItem?.value || 0}</Text>
                </HStack>
                <HStack flex="1" justify="center" color={transportItem ? "yellow.400" : "neon.400"}>
                  <Text opacity={0.5}>{getShopItemStatname(ItemTextEnum.Transport)}:</Text>
                  <Text> {playerEntity?.getTransport()}</Text>
                </HStack>
              </HStack>
            </Card>

            <HStack w="full">
              <Card flex="1" h="40px" alignItems="center" justify="center">
                {attackItem ? (
                  getShopItem(attackItem.id, attackItem.level).icon({
                    boxSize: "26",
                    color: "yellow.400",
                  })
                ) : (
                  <Dots color="neon.600" />
                )}
              </Card>
              <Card flex="1" h="40px" alignItems="center" justify="center">
                {defenseItem ? (
                  getShopItem(defenseItem.id, defenseItem.level).icon({
                    boxSize: "26",
                    color: "yellow.400",
                  })
                ) : (
                  <Dots color="neon.600" />
                )}
              </Card>
              <Card flex="1" h="40px" alignItems="center" justify="center">
                {speedItem ? (
                  getShopItem(speedItem.id, speedItem.level).icon({
                    boxSize: "26",
                    color: "yellow.400",
                  })
                ) : (
                  <Dots color="neon.600" />
                )}
              </Card>
              <Card flex="1" h="40px" alignItems="center" justify="center">
                {transportItem ? (
                  getShopItem(transportItem.id, transportItem.level).icon({
                    boxSize: "26",
                    color: "yellow.400",
                  })
                ) : (
                  <Dots color="neon.600" />
                )}
              </Card>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center" w="full" pb="30px" pt="30px">
          <HStack w="full">
            <Button w="full" onClick={close}>
              Close
            </Button>
            <ShareButton />
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const getShareText = (playerEntity: PlayerEntity): string => {
  if (playerEntity.health > 0) {
    return encodeURIComponent(
      `${playerEntity.name} has reached Day ${playerEntity.turn} with ${formatCash(
        playerEntity.cash,
      )} $paper. Think you can out hustle them? #rollyourown.\n\n${window.location.origin}`,
    );
  } else {
    return encodeURIComponent(
      `${playerEntity.name} got dropped on Day ${playerEntity.turn} but pocketed ${formatCash(
        playerEntity.cash,
      )} $paper before checking out. Think you can out hustle them? #rollyourown.\n\n${window.location.origin}`,
    );
  }
};

export const ProfileButtonMobile = () => {
  const { account, playerEntityStore } = useDojoContext();
  const { playerEntity } = playerEntityStore;
  const [isOpen, setIsOpen] = useState(false);

  if (!account || !playerEntity) return null;

  return (
    <>
      <MenuItem h="48px" borderRadius={0} onClick={() => setIsOpen(true)}>
        <Avatar name={genAvatarFromId(playerEntity.avatarId)} /> <Text ml="10px">{playerEntity.name}</Text>
      </MenuItem>
      <Profile isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

const ProfileButton = () => {
  const { account, playerEntityStore } = useDojoContext();
  const { playerEntity } = playerEntityStore;
  const [isOpen, setIsOpen] = useState(false);

  if (!account || !playerEntity) return null;

  return (
    <>
      <Button h={["40px", "48px"]} {...headerButtonStyles} onClick={() => setIsOpen(true)}>
        <Avatar name={genAvatarFromId(playerEntity.avatarId)} />
      </Button>
      <Profile isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default ProfileButton;
