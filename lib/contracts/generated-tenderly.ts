import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Owner
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownerAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnerSet',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'changeOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

export const ownerAddress =
  '0xBb3c4f11Ed4d563A6ACBcFcd8F94C40FB18BC70F' as const

export const ownerConfig = { address: ownerAddress, abi: ownerAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownerAbi}__
 */
export const useReadOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownerAbi,
  address: ownerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ownerAbi}__ and `functionName` set to `"getOwner"`
 */
export const useReadOwnerGetOwner = /*#__PURE__*/ createUseReadContract({
  abi: ownerAbi,
  address: ownerAddress,
  functionName: 'getOwner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownerAbi}__
 */
export const useWriteOwner = /*#__PURE__*/ createUseWriteContract({
  abi: ownerAbi,
  address: ownerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ownerAbi}__ and `functionName` set to `"changeOwner"`
 */
export const useWriteOwnerChangeOwner = /*#__PURE__*/ createUseWriteContract({
  abi: ownerAbi,
  address: ownerAddress,
  functionName: 'changeOwner',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownerAbi}__
 */
export const useSimulateOwner = /*#__PURE__*/ createUseSimulateContract({
  abi: ownerAbi,
  address: ownerAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ownerAbi}__ and `functionName` set to `"changeOwner"`
 */
export const useSimulateOwnerChangeOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ownerAbi,
    address: ownerAddress,
    functionName: 'changeOwner',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownerAbi}__
 */
export const useWatchOwnerEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ownerAbi,
  address: ownerAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ownerAbi}__ and `eventName` set to `"OwnerSet"`
 */
export const useWatchOwnerOwnerSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ownerAbi,
    address: ownerAddress,
    eventName: 'OwnerSet',
  })
