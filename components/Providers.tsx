"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, fantom, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = createConfig({
  chains: [mainnet, fantom, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [fantom.id]: http(),
  },
  connectors: [injected()],
});

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{children}</SessionProvider>
        </QueryClientProvider>
      </WagmiProvider>
      <Toaster />
    </>
  );
}
