"use client";
import {
  useReadStorageRetrieve,
  useWriteStorageStore,
} from "@/lib/contracts/generated-tenderly";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useAccount,
  useSwitchChain,
  useWaitForTransactionReceipt,
} from "wagmi";

export default function Storage() {
  const { isConnected, chain } = useAccount();
  const { chains } = useSwitchChain();
  const [value, setValue] = useState("");

  const {
    data: dataRetrieve,
    status: statusRetrieve,
    refetch: refetchRetrieve,
  } = useReadStorageRetrieve();
  const {
    data: storeTx,
    status: statusStore,
    writeContract: writeContractStore,
  } = useWriteStorageStore({
    mutation: {
      onSuccess() {
        toast.success("Transaction sent!");
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  });

  const { data: waitTx, error: errorWaitTx } = useWaitForTransactionReceipt({
    hash: storeTx,
    confirmations: 1,
  });

  useEffect(() => {
    if (waitTx) {
      toast.success("Transaction confirmed!");
      refetchRetrieve();
    }
    if (errorWaitTx) {
      toast.error(errorWaitTx.message);
    }
  }, [waitTx, errorWaitTx]);

  const unsupported = chains.filter((x) => x.id !== chain?.id).length === 0;
  const valueRetrieve =
    statusRetrieve === "error" ? (
      <>Not available</>
    ) : statusRetrieve === "success" ? (
      <>{dataRetrieve.toString()}</>
    ) : (
      <span className="skeleton w-5 h-2"></span>
    );

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          writeContractStore({
            args: [BigInt(value)],
          });
        }}
        className="form-control w-full"
      >
        <label className="label">
          <span className="label-text">New value</span>
          <span className="label-text">Current value: {valueRetrieve}</span>
        </label>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Insert a uint256 value"
          value={value}
          className="input input-bordered w-full"
          type="number"
          required
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
