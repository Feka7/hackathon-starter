import { defineConfig } from '@wagmi/cli'
import { fetch } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'contracts/generated.ts', 
  plugins: [
    fetch({
      contracts: [
        {
          name: 'Mememorphosis',
          address: '0x0000049F63Ef0D60aBE49fdD8BEbfa5a68822222',
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
          url: `https://api.ftmscan.com/api?module=contract&action=getabi&address=${address}`,
        }
      },
    }),
  ],
})
