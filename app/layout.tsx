import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const font = DotGothic16({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackathon Starter",
  description: "A simple starter for web3 hackathons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body
        className={
          font.className + " w-full place-content-center flex min-h-screen bg-base-100"
        }
      >
        <Providers>
          <div className="max-w-5xl flex flex-col w-full">
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
