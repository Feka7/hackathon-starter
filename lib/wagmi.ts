import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { tenderly_fork_chain } from "./tenderly";

export const config = createConfig({
  chains: [sepolia, tenderly_fork_chain],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [sepolia.id]: http(),
    [tenderly_fork_chain.id]: http(),
  },
  connectors: [injected()],
});