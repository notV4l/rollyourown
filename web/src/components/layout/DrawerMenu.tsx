import { useConfigStore, useDojoContext, useGameStore, useRouterContext } from "@/dojo/hooks";
import { IsMobile } from "@/utils/ui";
import {
  Button,
  Card,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  ListIcon,
  ListItem,
  ListItemProps,
  StyleProps,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useRef } from "react";
import { Cigarette, Clock, Close, Dots, Home, PaperIcon, Refresh } from "../icons";
import { HeaderButton, MediaPlayer } from ".";
import { ChainSelector, ConnectButton, TokenBalance } from "../wallet";
import { Burners } from "../wallet/Burners";
import { Predeployed } from "../wallet/Predeployed";
import { OnGoingGames } from "../pages/home/OnGoingGames";
import { ProfileLink, ProfileLinkDrawer } from "../pages/profile/Profile";
import { useAccount } from "@starknet-react/core";
import { HustlerStats } from "../pages/profile/HustlerStats";
import { BuiltBy } from "../pages/home";
import { HustlerIcon, Hustlers } from "../hustlers";
import { shortString } from "starknet";
import { Calendar } from "../icons/archive";

const DrawerMenu = () => {
  const { router, gameId, isAdmin } = useRouterContext();
  const { game } = useGameStore();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { config } = useConfigStore();
  const { account } = useAccount();
  const { uiStore } = useDojoContext();
  return (
    <>
      <HeaderButton ref={btnRef} onClick={onOpen} w="48px">
        <Dots />
      </HeaderButton>
      <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay onClick={onClose} />
        <DrawerContent minW="340px">
          <DrawerHeader borderBottom="solid 2px" borderColor="neon.900" pb={2}>
            <Heading color="neon.500" fontWeight="normal">
              <PaperIcon width="28px" height="28px" /> Roll Your Own
            </Heading>
          </DrawerHeader>
          <Close position="absolute" right="16px" top="16px" cursor="pointer" onClick={onClose} />
          <DrawerBody px={3} py={0}>
            <VStack
              w="full"
              h="full"
              justifyContent="space-between"
              // alignItems="flex-start"
              gap={6}
            >
              <VStack w="full" alignItems="flex-start" gap={12}>
                <UnorderedList w="full" listStyleType="none">
                  <DrawerListItem cursor="default">
                    <MediaPlayer />
                  </DrawerListItem>

                  <DrawerListItem cursor="default">
                    <Text color="neon.500"> ACCOUNT </Text>
                  </DrawerListItem>

                  <DrawerListItem cursor="default">
                    <HStack w="full" justifyContent="space-between">
                      <ConnectButton /> <ChainSelector canChange={!gameId} /> <Burners />
                      <Predeployed />
                    </HStack>
                  </DrawerListItem>

                  {account && config && (
                    <DrawerListItem cursor="default">
                      <HStack w="full">
                        <TokenBalance address={account?.address} token={config?.ryoAddress.paper} icon={PaperIcon} />{" "}
                        <Text>PAPER</Text>
                      </HStack>
                    </DrawerListItem>
                  )}

                  {game && (
                    <>
                      <DrawerListItem cursor="default">
                        <HStack w="full" justifyContent="space-between">
                          <Text color="neon.500"> GAME </Text>
                          <></>
                        </HStack>
                      </DrawerListItem>

                      <DrawerListItem>
                        <ProfileLinkDrawer />
                        {/* <HStack w="full">
                          <HustlerIcon hustler={game.gameInfos.hustler_id as Hustlers} />
                          <Text> {shortString.decodeShortString(game.gameInfos.player_name)} </Text>
                        </HStack> */}
                      </DrawerListItem>

                      <DrawerListItem
                        onClick={() => {
                          uiStore.openRefreshGame();
                        }}
                      >
                        <Refresh mr={2} /> REFRESH
                      </DrawerListItem>
                      <DrawerListItem
                        onClick={() => {
                          uiStore.openQuitGame();
                        }}
                      >
                        <Home mr={2} /> QUIT GAME
                      </DrawerListItem>
                    </>
                  )}

                  <DrawerListItem cursor="default" color="neon.500">
                    <Text> NAVIGATION </Text>
                  </DrawerListItem>

                  {!game && (
                    <DrawerListItem
                      onClick={() => {
                        router.push("/");
                      }}
                    >
                      <Home mr={2} /> HOME
                    </DrawerListItem>
                  )}
                  <DrawerListItem
                    onClick={() => {
                      router.push("/game/history");
                    }}
                  >
                    <Clock mr={2} /> HISTORY
                  </DrawerListItem>
                  <DrawerListItem
                    onClick={() => {
                      router.push("/season");
                    }}
                  >
                    <Calendar mr={2} /> SEASONS
                  </DrawerListItem>

                  {/* DEV */}

                  {isAdmin && (
                    <>
                      <DrawerListItem cursor="default" color="neon.500">
                        <Text> ADMIN </Text>
                      </DrawerListItem>
                      <DrawerListItem
                        onClick={() => {
                          router.push("/admin");
                        }}
                      >
                        <Cigarette mr={2} /> ADMIN
                      </DrawerListItem>
                      <DrawerListItem
                        onClick={() => {
                          router.push("/devtools");
                        }}
                      >
                        <Cigarette mr={2} /> DEVTOOLS
                      </DrawerListItem>
                    </>
                  )}
                </UnorderedList>
              </VStack>

              {/* <MediaPlayer /> */}
            </VStack>
          </DrawerBody>

          <DrawerFooter>{/* <BuiltBy /> */}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;

const DrawerListItem = ({ children, ...props }: { children: ReactNode } & StyleProps & ListItemProps) => {
  return (
    <ListItem
      display="flex"
      alignItems="center"
      borderBottom="solid 2px"
      borderColor="neon.900"
      pb={2}
      pt={2}
      cursor="pointer"
      minH="48px"
      {...props}
    >
      {children}
    </ListItem>
  );
};
