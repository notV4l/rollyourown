import { Layout } from "@/components/layout";
import { ChildrenOrConnect, TokenBalance } from "@/components/wallet";
import { useDojoContext, useRouterContext, useSystems } from "@/dojo/hooks";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAccount } from "@starknet-react/core";
import { observer } from "mobx-react-lite";

import { Wallet } from "@/components/icons/archive";
import { DrugTable } from "@/components/pages/admin/DrugTable";
import { EncounterTable } from "@/components/pages/admin/EncounterTable";
import { GameConfigTable } from "@/components/pages/admin/GameConfigTable";
import { GameLayoutTable } from "@/components/pages/admin/GameLayoutTable";
import { HustlerItemBaseTable } from "@/components/pages/admin/HustlerItemBaseTable";
import { HustlerItemTiersTable } from "@/components/pages/admin/HustlerItemTiersTable";
import { PlayerLayoutTable } from "@/components/pages/admin/PlayerLayoutTable";
import { useEffect, useState } from "react";
import { Dropdown } from "@/components/common";
import { RyoConfigTable } from "@/components/pages/admin/RyoConfigTable";
import { PaperIcon } from "@/components/icons";

const Admin = () => {
  const { router } = useRouterContext();
  const { account } = useAccount();
  const { configStore } = useDojoContext();

  return (
    <Layout isSinglePanel={true}>
      <Tabs variant="unstyled" w="full">
        <TabList pb={6}>
          <Tab>ADMIN</Tab>
          <Tab>SEASON</Tab>
          <Tab>GAME</Tab>
          <Tab>DRUGS</Tab>
          <Tab>ITEMS</Tab>
          <Tab>ENCOUNTERS</Tab>
          <Tab>LAYOUTS</Tab>
          {/* <Cigarette
            onClick={() => {
              configStore.init();
            }}
          /> */}
        </TabList>

        <TabPanels mt={0} maxH="calc(100vh - 300px)" overflowY="scroll">
          <TabPanel p={0}>
            <Flex w="full" alignItems="flex-start" gap={3} flexDirection="row" flexWrap="wrap">
              <RyoAddressCard />
              <RyoPauseCard />
              <TreasuryClaimCard />
            </Flex>
          </TabPanel>

          <TabPanel p={0}>
            <Flex w="full" alignItems="flex-start" gap={3} flexDirection="row" flexWrap="wrap">
              <RyoSuperchargeCard />
              <RyoLeaderboardDurationCard />
              <RyoFeeCard />
            </Flex>
          </TabPanel>

          <TabPanel p={0}>
            <Card w="full" p={3}>
              <HStack w="full" gap={6} alignItems="flex-start">
                <VStack alignItems="flex-start">
                  <Text>Game Config</Text>
                  <GameConfigTable />
                </VStack>
                <VStack alignItems="flex-start">
                  <Text>Ryo Config</Text>
                  <RyoConfigTable />
                </VStack>
              </HStack>
            </Card>
          </TabPanel>

          <TabPanel p={0}>
            <Card w="full">
              <DrugTable />
            </Card>
          </TabPanel>

          <TabPanel p={0}>
            <VStack w="full" alignItems="flex-start">
              <Text>ITEM BASE</Text>
              <Card w="full">
                <HustlerItemBaseTable />
              </Card>
              <Text>ITEM TIERS</Text>
              <Card w="full">
                <HustlerItemTiersTable />
              </Card>
            </VStack>
          </TabPanel>

          <TabPanel p={0}>
            <Card w="full">
              <EncounterTable />
            </Card>
          </TabPanel>

          <TabPanel p={0}>
            <VStack w="full" alignItems="flex-start">
              <Text>GAME </Text>
              <Card w="full">
                <GameLayoutTable />
              </Card>
              <Text>PLAYER </Text>
              <Card w="full">
                <PlayerLayoutTable />
              </Card>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default observer(Admin);

const RyoAddressCard = observer(() => {
  const {
    configStore: { config },
  } = useDojoContext();

  return (
    <Card p={1}>
      <CardHeader textAlign="left" borderBottom="solid 1px" borderColor="neon.500" mb={3}>
        RYO ADDRESS
      </CardHeader>
      <CardBody>
        <VStack alignItems="flex-start" >
          <HStack>
            <Text w="120px">PAPER</Text>
            <Text>{config?.ryoAddress.paper}</Text>
            <TokenBalance address={config?.ryoAddress.paper} token={config?.ryoAddress.paper} icon={PaperIcon} />
          </HStack>
          <HStack>
            <Text w="120px">TREASURY</Text>
            <Text>{config?.ryoAddress.treasury}</Text>
            <TokenBalance address={config?.ryoAddress.treasury} token={config?.ryoAddress.paper} icon={PaperIcon} />
          </HStack>
          <HStack>
            <Text w="120px">LAUNDROMAT</Text>
            <Text>{config?.ryoAddress.laundromat}</Text>
            <TokenBalance address={config?.ryoAddress.laundromat} token={config?.ryoAddress.paper}  icon={PaperIcon} />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
});

const TreasuryClaimCard = observer(() => {
  const { configStore } = useDojoContext();
  const { config } = configStore;

  const { claimTreasury, isPending } = useSystems();

  const onClaim = async () => {
    await claimTreasury();
    await configStore.init();
  };

  return (
    <Card p={1}>
      <CardHeader textAlign="left" borderBottom="solid 1px" borderColor="neon.500" mb={3}>
        TREASURY
      </CardHeader>
      <CardBody>
        <VStack alignItems="flex-start">
          <HStack>
            <Text w="180px">PAPER BALANCE</Text>
            <TokenBalance address={config?.ryoAddress.treasury} token={config?.ryoAddress.paper} />
          </HStack>
          <HStack>
            <Text w="180px">PAPER CLAIMABLE</Text>
            <Text> {config?.ryo.treasury_balance}</Text>
          </HStack>
        </VStack>
      </CardBody>
      <CardFooter>
        <ChildrenOrConnect>
          <Button isLoading={isPending} onClick={onClaim}>
            Claim
          </Button>
        </ChildrenOrConnect>
      </CardFooter>
    </Card>
  );
});

const RyoPauseCard = observer(() => {
  const { configStore } = useDojoContext();
  const { config } = configStore;

  const { setPaused, isPending } = useSystems();

  const onTogglePause = async () => {
    await setPaused(!config?.ryo.paused);
    await configStore.init();
  };

  return (
    <Card p={1}>
      <CardHeader textAlign="left" borderBottom="solid 1px" borderColor="neon.500" mb={3}>
        RYO
      </CardHeader>
      <CardBody>
        <VStack alignItems="flex-start">
          <Text>{config?.ryo.paused ? "PAUSED" : "NOT PAUSED"}</Text>
        </VStack>
      </CardBody>
      <CardFooter>
        <ChildrenOrConnect>
          <Button isLoading={isPending} onClick={onTogglePause}>
            Toggle pause
          </Button>
        </ChildrenOrConnect>
      </CardFooter>
    </Card>
  );
});

const RyoLeaderboardDurationCard = observer(() => {
  const { configStore } = useDojoContext();
  const { config } = configStore;

  const [duration, setDuration] = useState(config?.ryo.season_duration);

  const { setLeaderboardDuration, isPending } = useSystems();

  const updateLeaderboardDuration = async () => {
    await setLeaderboardDuration(duration);
    await configStore.init();
  };

  return (
    <Card p={1}>
      <CardHeader textAlign="left" borderBottom="solid 1px" borderColor="neon.500" mb={3}>
        LEADERBOARD
      </CardHeader>
      <CardBody>
        <HStack>
          <Text w="180px" flexShrink={0}>
            DURATION (sec)
          </Text>
          <Input
            w="100px"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
          <ChildrenOrConnect>
            <Button isLoading={isPending} onClick={updateLeaderboardDuration}>
              <Wallet />
            </Button>
          </ChildrenOrConnect>
        </HStack>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
});

const RyoSuperchargeCard = observer(() => {
  const { configStore } = useDojoContext();
  const { config } = configStore;

  const [value, setValue] = useState(0);

  const { superchargeJackpot, isPending } = useSystems();

  const onSuperchargeJackpot = async () => {
    await superchargeJackpot(config?.ryo.season_version, value);
    await configStore.init();
  };

  return (
    <Card p={1}>
      <CardHeader textAlign="left" borderBottom="solid 1px" borderColor="neon.500" mb={3}>
        SUPERCHARGE JACKPOT
      </CardHeader>
      <CardBody>
        <HStack>
          <Text w="180px" flexShrink={0}>
            CURRENT SEASON : {config?.ryo.season_version}
          </Text>

          <Text w="180px" flexShrink={0}>
            PAPER AMOUNT
          </Text>
          <Input
            w="100px"
            value={value}
            onChange={(e) => {
              setValue(Number(e.target.value));
            }}
          />
          <ChildrenOrConnect>
            <Button isLoading={isPending} onClick={onSuperchargeJackpot}>
              <Wallet />
            </Button>
          </ChildrenOrConnect>
        </HStack>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
});

const RyoFeeCard = observer(() => {
  const { configStore } = useDojoContext();
  const { config } = configStore;

  const [paperFeeValue, setPaperFeeValue] = useState(config?.ryo.paper_fee);
  const [treasuryFeePctValue, setTreasuryFeePctValue] = useState(config?.ryo.treasury_fee_pct);

  const { setPaperFee, setTreasuryFeePct, isPending } = useSystems();

  useEffect(() => {
    setPaperFeeValue(config?.ryo.paper_fee);
  }, [config?.ryo.paper_fee]);

  useEffect(() => {
    setTreasuryFeePctValue(config?.ryo.treasury_fee_pct);
  }, [config?.ryo.treasury_fee_pct]);

  // const { setPaused, isPending } = useSystems();

  const updatePaperFee = async () => {
    await setPaperFee(paperFeeValue);
    await configStore.init();
  };

  const updateTreasuryFeePct = async () => {
    await setTreasuryFeePct(treasuryFeePctValue);
    await configStore.init();
  };

  return (
    <Card p={1}>
      <CardHeader textAlign="left" borderBottom="solid 1px" borderColor="neon.500" mb={3}>
        RYO FEES
      </CardHeader>
      <CardBody>
        <VStack alignItems="flex-start">
          <HStack>
            <Text w="180px" flexShrink={0}>
              PAPER FEE
            </Text>
            <Input
              w="100px"
              value={paperFeeValue}
              onChange={(e) => {
                setPaperFeeValue(e.target.value);
              }}
            />
            <Button isLoading={isPending} onClick={updatePaperFee}>
              <Wallet />
            </Button>
          </HStack>

          <HStack>
            <Text w="180px" flexShrink={0}>
              TREASURY FEE %
            </Text>
            <Input
              w="100px"
              value={treasuryFeePctValue}
              onChange={(e) => {
                setTreasuryFeePctValue(e.target.value);
              }}
            />
            <Button isLoading={isPending} onClick={updateTreasuryFeePct}>
              <Wallet />
            </Button>
          </HStack>
        </VStack>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
});
