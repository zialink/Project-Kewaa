import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0xe9f96fba45f1b07931037cf497351fe38d57684c9d67edbbe67e2ab7139df74e": true,
};

export const createUseAccount = (web3, provider) => () => {
  const { data, mutate, ...swrResponse } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    account: {
      data,
      isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...swrResponse,
    },
  };
};
