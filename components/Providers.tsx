"use client";
import { config } from "@/lib/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { type State, WagmiProvider } from "wagmi";

type Props = {
  children: ReactNode,
  initialState?: State, 
}

const queryClient = new QueryClient();

export default function Providers({ children, initialState }: Props) {
  return (
    <>
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{children}</SessionProvider>
        </QueryClientProvider>
      </WagmiProvider>
      <Toaster
      toastOptions={{
        style: {
          maxWidth: "fit-content"
        }
      }
      } />
    </>
  );
}
