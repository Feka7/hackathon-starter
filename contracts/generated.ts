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
