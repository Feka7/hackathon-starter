"use client";
import { useDebounce, useIsClient } from "usehooks-ts";
import {
  useAccount,
  useBalance,
  useNetwork,
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from "viem";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SendTransaction() {
  const isClient = useIsClient();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { data: balance } = useBalance({
    address: address,
    chainId: chain?.id,
    watch: isConnected,
  });
  const [to, setTo] = useState("");
  const debouncedTo = useDebounce<string>(to, 500);
  const [amount, setAmount] = useState("");
  const debouncedAmount = useDebounce<string>(amount, 500);

  const { config, error } = usePrepareSendTransaction({
    to: debouncedTo,
    value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  });
  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    chainId: chain?.id,
    onSuccess: () => {
      setTo("");
      setAmount("");
      toast.success("Transaction confirmed");
    },
  });

  if (!isClient) return <div className="skeleton w-full h-40 mt-4"></div>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendTransaction?.();
      }}
      className="form-control w-full"
    >
      <label className="label">
        <span className="label-text">Address</span>
      </label>
      <input
        aria-label="Recipient"
        onChange={(e) => setTo(e.target.value)}
        placeholder="0xA0Cf…251e"
        value={to}
        className="input input-bordered w-full"
      />
      <label className="label">
        <span className="label-text">Amount</span>
        <span className="label-text">
          Avaiable: {balance?.formatted} {balance?.symbol}
        </span>
      </label>
      <input
        aria-label="Amount (ether)"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.05"
        value={amount}
        className="input input-bordered w-full"
        type="number"
      />
      <button
        type="submit"
        disabled={
          isLoading ||
          !sendTransaction ||
          !to ||
          !amount ||
          !isConnected ||
          chain?.unsupported
        }
        className="btn btn-primary mt-4"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
      {error && <div className="text-red-500">{error.name}</div>}
    </form>
  );
}
