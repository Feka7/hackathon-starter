import { defineConfig } from '@wagmi/cli'
import { fetch } from '@wagmi/cli/plugins'
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export default defineConfig({
  out: 'contracts/generated.ts', 
  plugins: [
    fetch({
      contracts: [
        {
          name: 'Permit2',
          address: '0x000000000022d473030f116ddee9f6b43ac78ba3'
        },
        {
          name: 'Multicall2',
          address: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696'
        }
      ],
      async parse({ response }) {
        const json = await response.json() as any;
        if (json.status === '0') throw new Error(json.message)
        return JSON.parse(json.result)
      },
      request(contract) {
        if (!contract.address) throw new Error('address is required')
        const address =
          typeof contract.address === 'string'
            ? contract.address
            : Object.values(contract.address)[0]
        return {
          url: process.env.FETCH_ABI_URL+address,
        }
      },
    }),
  ],
})
