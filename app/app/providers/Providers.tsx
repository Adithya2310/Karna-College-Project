"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
    RainbowKitProvider,
    lightTheme,
    darkTheme,
    DisclaimerComponent,
} from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiConfig, chains } from "@/helpers/wallet/WalletConfig";

export function Providers({ children }:{ children: React.ReactNode }) {
    return (
        <WagmiConfig client={wagmiConfig}>
            <RainbowKitProvider
                chains={chains}
                theme={{
                    lightMode: lightTheme({
                        accentColor: "#000000",
                        accentColorForeground: "#D9D9D9",
                        borderRadius: "small",
                        overlayBlur: "small",
                    }),
                    darkMode: darkTheme({
                        accentColor: "#35f0d0",
                        accentColorForeground: "#1A1B1F",
                        borderRadius: "small",
                        overlayBlur: "small",
                    }),
                }}
                appInfo={{
                    appName: "Zeru",
                }}
            >
                <div>{children}</div>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

// import * as React from 'react';
// import {
//     RainbowKitProvider,
//     getDefaultWallets,
//     connectorsForWallets,
// } from '@rainbow-me/rainbowkit';
// import {
//     argentWallet,
//     trustWallet,
//     ledgerWallet,
// } from '@rainbow-me/rainbowkit/wallets';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { mainnet, arbitrum } from 'wagmi/chains';
// import { publicProvider } from 'wagmi/providers/public';

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//     [
//         filecoinCalibration,
//         filecoin,
//         ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
//     ],
//     [publicProvider()]
// );

// const projectId = 'YOUR_PROJECT_ID';

// const { wallets } = getDefaultWallets({
//     appName: 'RainbowKit demo',
//     projectId,
//     chains,
// });

// const demoAppInfo = {
//     appName: 'Rainbowkit Demo',
// };

// const connectors = connectorsForWallets([
//     ...wallets,
//     {
//         groupName: 'Other',
//         wallets: [
//             argentWallet({ projectId, chains }),
//             trustWallet({ projectId, chains }),
//             ledgerWallet({ projectId, chains }),
//         ],
//     },
// ]);

// const wagmiConfig = createConfig({
//     autoConnect: true,
//     connectors,
//     publicClient,
//     webSocketPublicClient,
// });