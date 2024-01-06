"use client";

import { getCsrfToken, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { SiweMessage } from "siwe";
import { useAccount, useNetwork, useSignMessage } from "wagmi";

export function Siwe() {
  const { signMessageAsync } = useSignMessage();
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { data: session, status } = useSession();
  const [isSigning, setIsSigning] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setIsSigning(true);
      if (!address) {
        throw new Error("Please connect wallet");
      }
      const callbackUrl = "/private";
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in with " + chain?.name + " to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      const result = await signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      });
      result?.ok && router.refresh();
    } catch (e) {
      console.error(e);
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Unknown error");
      }
    } finally {
      setIsSigning(false);
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (session) {
          signOut();
        } else {
          handleLogin();
        }
      }}
      className="btn btn-primary w-full"
      disabled={isSigning || status === "loading"}
    >
      {!session ? "Sign-in" : "Sign-out"}
    </button>
  );
}
