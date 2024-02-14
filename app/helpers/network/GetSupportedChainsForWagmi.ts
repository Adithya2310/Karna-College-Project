import { devChain } from "@/dev/devChain";
import {
  scrollTestnet,
  arbitrum,
  mainnet,
  arbitrumGoerli,
  filecoin,
  filecoinCalibration,
  baseGoerli,
} from "wagmi/chains";

export const GetSupportedChainsForWagmi = () => {
  console.log("process.env.NEXT_PUBLIC_ISPRODUCTION: ", process.env.NEXT_PUBLIC_ISPRODUCTION);
  if (process.env.NEXT_PUBLIC_ISPRODUCTION == "true") {
    return [arbitrumGoerli];
  } else {
    return [devChain, arbitrumGoerli];
  }
};
