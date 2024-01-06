"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { mainnet, fantom, sepolia } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";

const { chains, publicClient } = configureChains(
  [mainnet, fantom, sepolia],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WagmiConfig config={config}>
        <SessionProvider>{children}</SessionProvider>
      </WagmiConfig>
      <Toaster />
    </>
  );
}
