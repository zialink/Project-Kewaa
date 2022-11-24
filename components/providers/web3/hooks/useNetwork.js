import { useEffect } from "react";
import useSWR from "swr";
import Web3 from "web3";

const NETWORKS = {
  1: "Ethereum Mainnet",
  137: "Polygon",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  5777: "Ganache",
  1337: "Localhost",
};

const targetChainId = process.env.NEXT_PUBLIC_TARGET_CHAIN_ID;
const targetNetwork = NETWORKS[targetChainId];

export const createUseNetwork = (web3, provider) => () => {
  const { data, mutate, ...swrResponse } = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const chainId = await web3.eth.getChainId();
      return NETWORKS[chainId];
    }
  );

  const switchToTargetNetwork = async () => {
    const chainToHex = web3 && web3.utils.toHex(targetChainId);
    try {
      provider
        ? await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `${chainToHex}` }],
          })
        : console.log("No provider found");
      console.log(
        `Network successfully switched to ${
          NETWORKS[parseInt(chainToHex, 16)]
        } `
      );
    } catch (error) {
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `${chainToHex}`,
                chainName: `NETWORKS[parseInt(chainToHex, 16)]`,
                rpcUrls: ["http://127.0.0.1:7545"] /* ... */,
              },
            ],
          });
        } catch (addError) {
          // handle "add" error
          console.error(`Could not switch to ${targetNetwork}`);
        }
      }
    }
  };
  useEffect(() => {
    provider &&
      provider.on("chainChanged", (chainId) =>
        mutate(NETWORKS[parseInt(chainId, 16)])
      );
  }, [web3]);

  return {
    network: {
      data,
      target: targetNetwork,
      switchNetwork: switchToTargetNetwork,
      mutate,
      isSupported: data === targetNetwork,
      ...swrResponse,
    },
  };
};
