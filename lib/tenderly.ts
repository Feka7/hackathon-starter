import { type Chain } from 'viem'
 
export const tenderly_fork_chain = {
  id: 11155111,
  name: 'Tenderly fork Sepolia',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: [process.env.NEXT_PUBLIC_TENDERLY_FORK_URL as string] },
  },
  testnet: true
} as const satisfies Chain