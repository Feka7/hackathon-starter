import type { Metadata } from "next";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/wagmi";

export const metadata: Metadata = {
  title: "Hackathon Starter",
  description: "A simple starter for web3 hackathons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en" data-theme="winter">
      <body className="w-full place-content-center flex min-h-screen bg-base-100">
        <div className="max-w-7xl flex flex-col w-full">
          <div className="flex-grow">
            <Providers initialState={initialState}>
              <div className="mt-4">
                <Navbar />
              </div>
              <div className="flex-grow">{children}</div>
            </Providers>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
