"use client";
import { useRef } from "react";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { formatEther, formatGwei, parseEther } from "viem";
import {
  useAccount,
  useAccountEffect,
  useBalance,
  useConnect,
  useDisconnect,
  useGasPrice,
  useSwitchChain,
} from "wagmi";
import { ConnectErrorType } from "wagmi/actions";
import { injected } from "wagmi/connectors";

const ConnectButton: React.FC = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const { connect, isPending: isPendingConnect } = useConnect({
    mutation: {
      onError: (error: ConnectErrorType) => {
        toast.error(error.message);
      },
    },
  });
  const { address, isConnected, chain } = useAccount();

  useAccountEffect({
    onConnect: ({ isReconnected }) => {
      if (!isReconnected) {
        toast.success("Connected");
      }
    },
    onDisconnect: () => {
      toast.success("Disconnected");
    },
  });

  const { chains, isPending: isPendingSwitch, switchChain } = useSwitchChain();
  const { data: balance, status: statusBalance } = useBalance({
    address: address,
    chainId: chain?.id,
  });

  const { data: gasPrice, isPending: isPendingGasPrice } = useGasPrice();

  const { disconnect } = useDisconnect();
  const unsupported = chains.filter((x) => x.id !== chain?.id).length === 0;

  return (
    <>
      <button
        disabled={isPendingConnect || isPendingSwitch}
        onClick={
          isConnected
            ? unsupported
              ? () => switchChain?.({ chainId: chains[0].id })
              : () => ref.current?.showModal()
            : () => connect({ connector: injected() })
        }
        className={twMerge(
          "text-white px-4 py-2 rounded-xl w-40 h-10",
          unsupported && isConnected ? "bg-error" : "bg-primary"
        )}
      >
        {isPendingConnect ? (
          " (connecting)"
        ) : (
          <>
            {isConnected ? (
              <>
                {unsupported
                  ? "Wrong network"
                  : address?.slice(0, 6) + "..." + address?.slice(-4)}
              </>
            ) : (
              "Connect"
            )}
          </>
        )}
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Address: {address}</p>
          <p className="py-4">Chain: {chain?.name}</p>
          <p className="py-4">
            Balance:{" "}
            {statusBalance === "error" ? (
              <>Not available</>
            ) : statusBalance === "success" ? (
              <>
                {formatEther(balance?.value)} {balance?.symbol}
              </>
            ) : (
              <span className="skeleton w-5 h-2"></span>
            )}
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Chain</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              value={chain?.id}
              onChange={(e) =>
                switchChain?.({ chainId: parseInt(e.target.value) })
              }
              disabled={isPendingSwitch}
            >
              {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                  {chain.name}
                </option>
              ))}
            </select>
          </div>
          <p className="py-4">
            Gas price:{" "}
            {isPendingGasPrice || !gasPrice ? (
              <span className="skeleton w-20 h-5 rounded"></span>
            ) : (
              <> {formatGwei(gasPrice)} Gwei</>
            )}
          </p>
          <button
            onClick={() => {
              disconnect();
              ref.current?.close();
            }}
            className="btn btn-primary mt-12"
          >
            Disconnect
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ConnectButton;
