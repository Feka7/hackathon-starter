import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { mainnet, fantom, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { tenderly_fork_chain } from "./tenderly";

export const config = createConfig({
  chains: [mainnet, fantom,
     //sepolia 
     tenderly_fork_chain
    ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(),
   // [sepolia.id]: http(),
    [fantom.id]: http(),
    [tenderly_fork_chain.id]: http(),
  },
  connectors: [injected()],
});
