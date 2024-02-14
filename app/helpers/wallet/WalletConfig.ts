import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { createClient, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { avalanche, bsc, arbitrum, mainnet } from "wagmi/chains";
import { devChain } from "@/dev/devChain";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { GetSupportedChainsForWagmi } from "@/helpers/network/GetSupportedChainsForWagmi";
export const { chains, provider, webSocketProvider } = configureChains(
  GetSupportedChainsForWagmi(),
  // [
  //   jsonRpcProvider({
  //     rpc: (chain) => ({
  //       http:
  //         chain.id == "1337"
  //           ? "http://localhost:7545"
  //           : "https://arb1.arbitrum.io/rpc",
  //     }),
  //   }),
  // ],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "DeRent",
  projectId: "94aab0d500c33cbdbd76938499913c8f",
  chains,
});

export const wagmiConfig = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

// const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
//   <Text>
//     <Trans
//       i18nKey='connectWalletTermsAndDisclaimerBlurb'
//       components={{
//         termsLink: <Link href='https://pooltogether.com/terms/' children={undefined} />,
//         disclaimerLink: (
//           <Link href='https://pooltogether.com/protocol-disclaimer/' children={undefined} />
//         )
//       }}
//     />
//   </Text>
// )
