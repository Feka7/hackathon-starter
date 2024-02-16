"use client";
import { config } from "@/lib/wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { type State, WagmiProvider } from "wagmi";

type Props = {
  children: ReactNode;
  initialState?: State;
};

const queryClient = new QueryClient();

export default function Providers({ children, initialState }: Props) {
  return (
    <>
      <SessionProvider>
        <WagmiProvider config={config} initialState={initialState}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              {children}
              </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </SessionProvider>
      <Toaster
        toastOptions={{
          style: {
            maxWidth: "fit-content",
          },
        }}
      />
    </>
  );
}
