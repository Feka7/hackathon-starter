"use client";
import { useRef } from "react";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { useIsClient } from "usehooks-ts";
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useFeeData,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";

const ConnectButton: React.FC = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const isClient = useIsClient();
  const { connect, connectors, isLoading, pendingConnector } = useConnect({
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const { address, isConnected } = useAccount({
    onConnect: ({isReconnected}) => {
       if(!isReconnected) {
        toast.success("Connected");
       }
    },
    onDisconnect: () => {
      toast.success("Disconnected");
    },
  });
  const { chain } = useNetwork();
  const {
    chains,
    isLoading: isLoadingSwitch,
    switchNetwork,
  } = useSwitchNetwork();
  const { data: balance } = useBalance({
    address: address,
    chainId: chain?.id,
    watch: isConnected,
  });
  const { data: networkFee } = useFeeData({
    cacheTime: 10_000,
    watch: isConnected,
  });
  const { disconnect } = useDisconnect();
  const connector = connectors.at(0);

  if (!isClient || !connector)
    return <div className="skeleton w-40 h-10 rounded-xl"></div>;

  return (
    <>
      <button
        disabled={!connector.ready || isLoading || isLoadingSwitch}
        key={connector.id}
        onClick={
          isConnected
            ? chain?.unsupported
              ? () => switchNetwork?.(chains[0].id)
              : () => ref.current?.showModal()
            : () => connect({ connector })
        }
        className={twMerge(
          "text-white px-4 py-2 rounded-xl w-40 h-10",
          chain?.unsupported && isConnected ? "bg-error" : "bg-primary"
        )}
      >
        {isLoading ? (
          connector.id === pendingConnector?.id && " (connecting)"
        ) : (
          <>
            {isConnected ? (
              <>
                {!chain?.unsupported
                  ? address?.slice(0, 6) + "..." + address?.slice(-4)
                  : "Wrong network"}
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
            Balance: {balance?.formatted} {balance?.symbol}
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Chain</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              value={chain?.id}
              onChange={(e) => switchNetwork?.(parseInt(e.target.value))}
              disabled={isLoadingSwitch}
            >
              {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                  {chain.name}
                </option>
              ))}
            </select>
          </div>
          <p className="py-4">Gas price: {networkFee?.formatted.gasPrice}</p>
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
