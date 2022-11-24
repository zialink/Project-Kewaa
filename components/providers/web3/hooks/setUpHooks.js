import { createUseAccount } from "./useAccount";
import { createUseNetwork } from "./useNetwork";

export const setUpHooks = (...deps) => {
  return {
    useAccount: createUseAccount(...deps),
    useNetwork: createUseNetwork(...deps),
  };
};
