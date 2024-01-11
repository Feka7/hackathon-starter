import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { mainnet, fantom, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, fantom, sepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [fantom.id]: http(),
  },
  connectors: [injected()],
});
