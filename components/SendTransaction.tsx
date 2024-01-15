"use client";
import { useDebounce } from "usehooks-ts";
import {
  useAccount,
  useBalance,
  useSendTransaction,
  useSwitchChain,
  useWaitForTransactionReceipt,
} from "wagmi";
import { Address, formatEther, parseEther } from "viem";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SendTransaction() {
  
  const { address, isConnected, chain } = useAccount();
  const { data: balance, refetch, status: statusBalance } = useBalance({
    address: address,
    chainId: chain?.id,
  });
  const { chains } = useSwitchChain();
  const [to, setTo] = useState("");
  const debouncedTo = useDebounce<string>(to, 500);
  const [amount, setAmount] = useState("");
  const debouncedAmount = useDebounce<string>(amount, 500);

  const {
    data: sendTx,
    isPending,
    sendTransaction,
  } = useSendTransaction({
    mutation: {
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Transaction sent!");
      },
    },
  });

  const { data: waitTx, error: errorWaitTx } = useWaitForTransactionReceipt({
    hash: sendTx,
    confirmations: 1,
  });

  useEffect(() => {
    if (waitTx) {
      toast.success("Transaction confirmed!");
      refetch();
    }
    if (errorWaitTx) {
      toast.error(errorWaitTx.message);
    }
  }, [waitTx, errorWaitTx]);

  const unsupported = chains.filter((x) => x.id !== chain?.id).length === 0;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendTransaction({
          to: debouncedTo as Address,
          value: parseEther(debouncedAmount),
        });
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
        required
        pattern="^0x[a-fA-F0-9]{40}$"
        minLength={42}
        maxLength={42}
        title="Invalid address"
      />
      <label className="label">
        <span className="label-text">Amount</span>
        <span className="label-text">
        Available: {statusBalance === "error" ? (
              <>Not available</>
            ) : statusBalance === "success" ? (
              <>
                {formatEther(balance?.value)} {balance?.symbol}
              </>
            ) : (
              <span className="skeleton w-5 h-2"></span>
            )}
        </span>
      </label>
      <input
        aria-label="Amount (ether)"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.05"
        value={amount}
        className="input input-bordered w-full"
        type="number"
        required
      />
      <button
        type="submit"
        disabled={isPending || !to || !amount || !isConnected || unsupported}
        className="btn btn-primary mt-4"
      >
        {isPending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
