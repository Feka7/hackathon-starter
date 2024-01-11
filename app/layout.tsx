import type { Metadata } from "next";
import "./globals.css";
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
  
  const initialState = cookieToInitialState(
    config,
    headers().get('cookie')
  );

  return (
    <html lang="en" data-theme="winter">
      <body className="w-full place-content-center flex min-h-screen bg-base-100">
        <Providers initialState={initialState}>
          <div className="max-w-7xl flex flex-col w-full">
            <div className="mt-4">
              <Navbar />
            </div>
            <div className="flex-grow">{children}</div>
            <div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

function extractWagmiString(inputString: string | null) {
  if (!inputString) {
    return null;
  }
  const substrings = inputString.split(" ");
  for (let substring of substrings) {
    if (substring.startsWith("wagmi.store")) {
      return substring;
    }
  }
  return null;
}
