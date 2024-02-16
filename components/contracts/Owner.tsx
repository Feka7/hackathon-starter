"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Address } from "viem";
import {
  useAccount,
  useSwitchChain,
  useWaitForTransactionReceipt,
} from "wagmi";
import { useReadOwnerGetOwner, useWatchOwnerOwnerSetEvent, useWriteOwnerChangeOwner } from "@/lib/contracts/generated-tenderly";

export default function Owner() {
  const { isConnected, chain } = useAccount();
  const { chains } = useSwitchChain();
  const [value, setValue] = useState("");

  const {
    data: dataOwner,
    status: statusOwner,
    refetch: refetchOwner,
  } = useReadOwnerGetOwner();
  const {
    data: storeTx,
    status: statusStore,
    writeContract: writeContractOwner,
  } = useWriteOwnerChangeOwner({
    mutation: {
      onSuccess() {
        toast.success("Transaction sent!");
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  });

  useWatchOwnerOwnerSetEvent({
    onError(error) {
      toast.error(error.message);
    },
    batch: false,
    onLogs(logs) {
      console.log(logs)
      const result = logs.find((log) => log.transactionHash === storeTx);
      // result?.newOwner &&
      //   toast.success("New owner: " + result.args.newOwner);
    },
    poll: true,
  });

  const { data: waitTx, error: errorWaitTx } = useWaitForTransactionReceipt({
    hash: storeTx,
    confirmations: 1,
  });

  useEffect(() => {
    if (waitTx) {
      toast.success("Transaction confirmed!");
      refetchOwner();
    }
    if (errorWaitTx) {
      toast.error(errorWaitTx.message);
    }
  }, [waitTx, errorWaitTx]);

  const unsupported = chains.filter((x) => x.id !== chain?.id).length === 0;
  const valueOwner =
    statusOwner === "error" ? (
      <>Not available</>
    ) : statusOwner === "success" ? (
      <>{dataOwner.toString()}</>
    ) : (
      <span className="skeleton w-5 h-2"></span>
    );

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          writeContractOwner({
            args: [value as Address],
          });
        }}
        className="form-control w-full"
      >
        <label className="label">
          <span className="label-text">New owner</span>
          <span className="label-text">Current value: {valueOwner}</span>
        </label>
        <input
          aria-label="Recipient"
          onChange={(e) => setValue(e.target.value)}
          placeholder="0xA0Cf…251e"
          value={value}
          className="input input-bordered w-full"
          required
          pattern="^0x[a-fA-F0-9]{40}$"
          minLength={42}
          maxLength={42}
          title="Invalid address"
        />
        <button
          type="submit"
          disabled={
            statusStore === "pending" || !value || !isConnected || unsupported
          }
          className="btn btn-primary mt-4"
        >
          {statusStore === "pending" ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  );
}
