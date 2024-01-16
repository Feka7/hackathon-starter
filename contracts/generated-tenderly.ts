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
  '0x0915EFa9aA25E83FE341c99063B07e3280C70282' as const

export const ownerConfig = { address: ownerAddress, abi: ownerAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Storage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const storageAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'retrieve',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'num', internalType: 'uint256', type: 'uint256' }],
    name: 'store',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const storageAddress =
  '0xe39B226fD118636254eB014CD5A1eac179fB7b92' as const

export const storageConfig = {
  address: storageAddress,
  abi: storageAbi,
} as const

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

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageAbi}__
 */
export const useReadStorage = /*#__PURE__*/ createUseReadContract({
  abi: storageAbi,
  address: storageAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"retrieve"`
 */
export const useReadStorageRetrieve = /*#__PURE__*/ createUseReadContract({
  abi: storageAbi,
  address: storageAddress,
  functionName: 'retrieve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageAbi}__
 */
export const useWriteStorage = /*#__PURE__*/ createUseWriteContract({
  abi: storageAbi,
  address: storageAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"store"`
 */
export const useWriteStorageStore = /*#__PURE__*/ createUseWriteContract({
  abi: storageAbi,
  address: storageAddress,
  functionName: 'store',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageAbi}__
 */
export const useSimulateStorage = /*#__PURE__*/ createUseSimulateContract({
  abi: storageAbi,
  address: storageAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link storageAbi}__ and `functionName` set to `"store"`
 */
export const useSimulateStorageStore = /*#__PURE__*/ createUseSimulateContract({
  abi: storageAbi,
  address: storageAddress,
  functionName: 'store',
})
