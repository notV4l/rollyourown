import { DojoChainConfig, getStarknetProviderChains } from "@/dojo/setup/config";
import colors from "@/theme/colors";
import { Chain } from "@starknet-react/chains";
import {
  ChainProviderFactory,
  ExplorerFactory,
  InjectedConnector,
  JsonRpcProviderArgs,
  StarknetConfig,
  argent,
  braavos,
  injected,
  jsonRpcProvider,
  starknetChainId,
  starkscan,
  useInjectedConnectors,
  useNetwork,
} from "@starknet-react/core";
import { ReactNode, useState } from "react";
import { RpcProvider } from "starknet";
import CartridgeConnector from "@cartridge/connector";
import { METHODS } from "http";

export const walletInstallLinks = {
  argentX: "https://www.argent.xyz/argent-x/",
  braavos: "https://braavos.app/download-braavos-wallet/",
};
export type walletInstallLinksKeys = keyof typeof walletInstallLinks;

function rpc(chain: Chain) {
  return {
    nodeUrl: chain.rpcUrls.default.http[0],
  };
}

export function customJsonRpcProvider(selectedChain: DojoChainConfig): ChainProviderFactory<RpcProvider> {
  return function (chain) {
    // if(!selectedChain) return undefined

    const config = {
      nodeUrl: selectedChain.rpcUrl || "",
    };
    // if (!config) return null;
    const chainId = selectedChain.chainConfig.id || undefined;

    ///@ts-ignore
    const provider = new RpcProvider({ ...selectedChain, ...config, chainId });

    return provider;
  };
}

export function StarknetProvider({ children, selectedChain }: { children: ReactNode; selectedChain: DojoChainConfig }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos(), injected({ id: "dojoburner" })],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "always",
    // Randomize the order of the connectors.
    // order: "random"
  });

  const chains = getStarknetProviderChains();
  // const connectors = isKatana ? [...listConnectors()] : [argent(), braavos()];

  // TODO: remove
  // const provider = jsonRpcProvider({ rpc });
  const provider = customJsonRpcProvider(selectedChain);

  const [explorer, setExplorer] = useState<ExplorerFactory>(() => starkscan);

  return (
    <StarknetConfig
      chains={chains}
      provider={provider}
      connectors={[...connectors, cartridgeConnector]}
      explorer={explorer}
      autoConnect={true}
    >
      {children}
    </StarknetConfig>
  );
}

import manifestRyoSepolia from "../../manifests/ryosepolia/manifest.json";

const cartridgeConnector = new CartridgeConnector(
  [
    {
      target: manifestRyoSepolia.contracts.find((c) => c.name === "rollyourown::systems::game::game")!.address,
      method: "travel",
    },
    {
      target: manifestRyoSepolia.contracts.find((c) => c.name === "rollyourown::systems::game::game")!.address,
      method: "decide",
    },
    {
      target: manifestRyoSepolia.contracts.find((c) => c.name === "rollyourown::systems::game::game")!.address,
      method: "end_game",
    },
    {
      target: manifestRyoSepolia.contracts.find((c) => c.name === "rollyourown::systems::laundromat::laundromat")!
        .address,
      method: "register_score",
    },
  ],
  {
    // url: "https://keychain-git-preview-test.preview.cartridge.gg/",
    url: "https://x.cartridge.gg",
    // theme: colors.neon["200"] as string,
    theme: "rollyourown",
    // theme: {
    //   colors: {
    //     // e.g. button bg
    //     primary: colors.neon["200"] as string,
    //   }
    // },
  },
) as unknown as InjectedConnector;


