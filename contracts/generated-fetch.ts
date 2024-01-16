import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multicall2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const multicall2Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct Multicall2.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct Multicall2.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct Multicall2.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct Multicall2.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct Multicall2.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct Multicall2.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct Multicall2.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const

export const multicall2Address =
  '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696' as const

export const multicall2Config = {
  address: multicall2Address,
  abi: multicall2Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Permit2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const permit2Abi = [
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'AllowanceExpired',
  },
  { type: 'error', inputs: [], name: 'ExcessiveInvalidation' },
  {
    type: 'error',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [{ name: 'maxAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidAmount',
  },
  { type: 'error', inputs: [], name: 'InvalidContractSignature' },
  { type: 'error', inputs: [], name: 'InvalidNonce' },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  { type: 'error', inputs: [], name: 'InvalidSignatureLength' },
  { type: 'error', inputs: [], name: 'InvalidSigner' },
  { type: 'error', inputs: [], name: 'LengthMismatch' },
  {
    type: 'error',
    inputs: [
      { name: 'signatureDeadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SignatureExpired',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint160',
        type: 'uint160',
        indexed: false,
      },
      {
        name: 'expiration',
        internalType: 'uint48',
        type: 'uint48',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Lockdown',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newNonce',
        internalType: 'uint48',
        type: 'uint48',
        indexed: false,
      },
      {
        name: 'oldNonce',
        internalType: 'uint48',
        type: 'uint48',
        indexed: false,
      },
    ],
    name: 'NonceInvalidation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint160',
        type: 'uint160',
        indexed: false,
      },
      {
        name: 'expiration',
        internalType: 'uint48',
        type: 'uint48',
        indexed: false,
      },
      { name: 'nonce', internalType: 'uint48', type: 'uint48', indexed: false },
    ],
    name: 'Permit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'word',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'mask',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'UnorderedNonceInvalidation',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [
      { name: 'amount', internalType: 'uint160', type: 'uint160' },
      { name: 'expiration', internalType: 'uint48', type: 'uint48' },
      { name: 'nonce', internalType: 'uint48', type: 'uint48' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint160', type: 'uint160' },
      { name: 'expiration', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'invalidateNonces',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'wordPos', internalType: 'uint256', type: 'uint256' },
      { name: 'mask', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'invalidateUnorderedNonces',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'approvals',
        internalType: 'struct IAllowanceTransfer.TokenSpenderPair[]',
        type: 'tuple[]',
        components: [
          { name: 'token', internalType: 'address', type: 'address' },
          { name: 'spender', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'lockdown',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'nonceBitmap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      {
        name: 'permitBatch',
        internalType: 'struct IAllowanceTransfer.PermitBatch',
        type: 'tuple',
        components: [
          {
            name: 'details',
            internalType: 'struct IAllowanceTransfer.PermitDetails[]',
            type: 'tuple[]',
            components: [
              { name: 'token', internalType: 'address', type: 'address' },
              { name: 'amount', internalType: 'uint160', type: 'uint160' },
              { name: 'expiration', internalType: 'uint48', type: 'uint48' },
              { name: 'nonce', internalType: 'uint48', type: 'uint48' },
            ],
          },
          { name: 'spender', internalType: 'address', type: 'address' },
          { name: 'sigDeadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      {
        name: 'permitSingle',
        internalType: 'struct IAllowanceTransfer.PermitSingle',
        type: 'tuple',
        components: [
          {
            name: 'details',
            internalType: 'struct IAllowanceTransfer.PermitDetails',
            type: 'tuple',
            components: [
              { name: 'token', internalType: 'address', type: 'address' },
              { name: 'amount', internalType: 'uint160', type: 'uint160' },
              { name: 'expiration', internalType: 'uint48', type: 'uint48' },
              { name: 'nonce', internalType: 'uint48', type: 'uint48' },
            ],
          },
          { name: 'spender', internalType: 'address', type: 'address' },
          { name: 'sigDeadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'permit',
        internalType: 'struct ISignatureTransfer.PermitTransferFrom',
        type: 'tuple',
        components: [
          {
            name: 'permitted',
            internalType: 'struct ISignatureTransfer.TokenPermissions',
            type: 'tuple',
            components: [
              { name: 'token', internalType: 'address', type: 'address' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'transferDetails',
        internalType: 'struct ISignatureTransfer.SignatureTransferDetails',
        type: 'tuple',
        components: [
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'permitTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'permit',
        internalType: 'struct ISignatureTransfer.PermitBatchTransferFrom',
        type: 'tuple',
        components: [
          {
            name: 'permitted',
            internalType: 'struct ISignatureTransfer.TokenPermissions[]',
            type: 'tuple[]',
            components: [
              { name: 'token', internalType: 'address', type: 'address' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'transferDetails',
        internalType: 'struct ISignatureTransfer.SignatureTransferDetails[]',
        type: 'tuple[]',
        components: [
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'permitTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'permit',
        internalType: 'struct ISignatureTransfer.PermitTransferFrom',
        type: 'tuple',
        components: [
          {
            name: 'permitted',
            internalType: 'struct ISignatureTransfer.TokenPermissions',
            type: 'tuple',
            components: [
              { name: 'token', internalType: 'address', type: 'address' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'transferDetails',
        internalType: 'struct ISignatureTransfer.SignatureTransferDetails',
        type: 'tuple',
        components: [
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
      { name: 'witnessTypeString', internalType: 'string', type: 'string' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'permitWitnessTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'permit',
        internalType: 'struct ISignatureTransfer.PermitBatchTransferFrom',
        type: 'tuple',
        components: [
          {
            name: 'permitted',
            internalType: 'struct ISignatureTransfer.TokenPermissions[]',
            type: 'tuple[]',
            components: [
              { name: 'token', internalType: 'address', type: 'address' },
              { name: 'amount', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'nonce', internalType: 'uint256', type: 'uint256' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'transferDetails',
        internalType: 'struct ISignatureTransfer.SignatureTransferDetails[]',
        type: 'tuple[]',
        components: [
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'witness', internalType: 'bytes32', type: 'bytes32' },
      { name: 'witnessTypeString', internalType: 'string', type: 'string' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'permitWitnessTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'transferDetails',
        internalType: 'struct IAllowanceTransfer.AllowanceTransferDetails[]',
        type: 'tuple[]',
        components: [
          { name: 'from', internalType: 'address', type: 'address' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint160', type: 'uint160' },
          { name: 'token', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint160', type: 'uint160' },
      { name: 'token', internalType: 'address', type: 'address' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const permit2Address =
  '0x000000000022D473030F116dDEE9F6B43aC78BA3' as const

export const permit2Config = {
  address: permit2Address,
  abi: permit2Abi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multicall2Abi}__
 */
export const useReadMulticall2 = /*#__PURE__*/ createUseReadContract({
  abi: multicall2Abi,
  address: multicall2Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadMulticall2GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadMulticall2GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadMulticall2GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadMulticall2GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadMulticall2GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadMulticall2GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadMulticall2GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadMulticall2GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multicall2Abi}__
 */
export const useWriteMulticall2 = /*#__PURE__*/ createUseWriteContract({
  abi: multicall2Abi,
  address: multicall2Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteMulticall2Aggregate = /*#__PURE__*/ createUseWriteContract(
  { abi: multicall2Abi, address: multicall2Address, functionName: 'aggregate' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteMulticall2BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteMulticall2TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteMulticall2TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multicall2Abi}__
 */
export const useSimulateMulticall2 = /*#__PURE__*/ createUseSimulateContract({
  abi: multicall2Abi,
  address: multicall2Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateMulticall2Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateMulticall2BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateMulticall2TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link multicall2Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateMulticall2TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: multicall2Abi,
    address: multicall2Address,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link permit2Abi}__
 */
export const useReadPermit2 = /*#__PURE__*/ createUseReadContract({
  abi: permit2Abi,
  address: permit2Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadPermit2DomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadPermit2Allowance = /*#__PURE__*/ createUseReadContract({
  abi: permit2Abi,
  address: permit2Address,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"nonceBitmap"`
 */
export const useReadPermit2NonceBitmap = /*#__PURE__*/ createUseReadContract({
  abi: permit2Abi,
  address: permit2Address,
  functionName: 'nonceBitmap',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link permit2Abi}__
 */
export const useWritePermit2 = /*#__PURE__*/ createUseWriteContract({
  abi: permit2Abi,
  address: permit2Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"approve"`
 */
export const useWritePermit2Approve = /*#__PURE__*/ createUseWriteContract({
  abi: permit2Abi,
  address: permit2Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"invalidateNonces"`
 */
export const useWritePermit2InvalidateNonces =
  /*#__PURE__*/ createUseWriteContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'invalidateNonces',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"invalidateUnorderedNonces"`
 */
export const useWritePermit2InvalidateUnorderedNonces =
  /*#__PURE__*/ createUseWriteContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'invalidateUnorderedNonces',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"lockdown"`
 */
export const useWritePermit2Lockdown = /*#__PURE__*/ createUseWriteContract({
  abi: permit2Abi,
  address: permit2Address,
  functionName: 'lockdown',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"permit"`
 */
export const useWritePermit2Permit = /*#__PURE__*/ createUseWriteContract({
  abi: permit2Abi,
  address: permit2Address,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"permitTransferFrom"`
 */
export const useWritePermit2PermitTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'permitTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"permitWitnessTransferFrom"`
 */
export const useWritePermit2PermitWitnessTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'permitWitnessTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePermit2TransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: permit2Abi, address: permit2Address, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link permit2Abi}__
 */
export const useSimulatePermit2 = /*#__PURE__*/ createUseSimulateContract({
  abi: permit2Abi,
  address: permit2Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePermit2Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"invalidateNonces"`
 */
export const useSimulatePermit2InvalidateNonces =
  /*#__PURE__*/ createUseSimulateContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'invalidateNonces',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"invalidateUnorderedNonces"`
 */
export const useSimulatePermit2InvalidateUnorderedNonces =
  /*#__PURE__*/ createUseSimulateContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'invalidateUnorderedNonces',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"lockdown"`
 */
export const useSimulatePermit2Lockdown =
  /*#__PURE__*/ createUseSimulateContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'lockdown',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"permit"`
 */
export const useSimulatePermit2Permit = /*#__PURE__*/ createUseSimulateContract(
  { abi: permit2Abi, address: permit2Address, functionName: 'permit' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"permitTransferFrom"`
 */
export const useSimulatePermit2PermitTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'permitTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"permitWitnessTransferFrom"`
 */
export const useSimulatePermit2PermitWitnessTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'permitWitnessTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link permit2Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePermit2TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: permit2Abi,
    address: permit2Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link permit2Abi}__
 */
export const useWatchPermit2Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: permit2Abi,
  address: permit2Address,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link permit2Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPermit2ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: permit2Abi,
    address: permit2Address,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link permit2Abi}__ and `eventName` set to `"Lockdown"`
 */
export const useWatchPermit2LockdownEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: permit2Abi,
    address: permit2Address,
    eventName: 'Lockdown',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link permit2Abi}__ and `eventName` set to `"NonceInvalidation"`
 */
export const useWatchPermit2NonceInvalidationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: permit2Abi,
    address: permit2Address,
    eventName: 'NonceInvalidation',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link permit2Abi}__ and `eventName` set to `"Permit"`
 */
export const useWatchPermit2PermitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: permit2Abi,
    address: permit2Address,
    eventName: 'Permit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link permit2Abi}__ and `eventName` set to `"UnorderedNonceInvalidation"`
 */
export const useWatchPermit2UnorderedNonceInvalidationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: permit2Abi,
    address: permit2Address,
    eventName: 'UnorderedNonceInvalidation',
  })
