import { type Chain } from 'viem'
 
export const tenderly_fork_chain = {
  id: parseInt(process.env.NEXT_PUBLIC_TENDERLY_CHAIN_ID as string),
  name: 'Tenderly',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: [process.env.NEXT_PUBLIC_TENDERLY_FORK_URL as string] },
  },
  testnet: true
} as const satisfies Chain