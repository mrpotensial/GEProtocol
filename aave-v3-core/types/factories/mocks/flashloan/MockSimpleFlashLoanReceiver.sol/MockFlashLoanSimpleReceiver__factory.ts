/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MockFlashLoanSimpleReceiver,
  MockFlashLoanSimpleReceiverInterface,
} from "../../../../mocks/flashloan/MockSimpleFlashLoanReceiver.sol/MockFlashLoanSimpleReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
    ],
    name: "ExecutedWithFail",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
    ],
    name: "ExecutedWithSuccess",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "contract IPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAmountToApprove",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToApprove",
        type: "uint256",
      },
    ],
    name: "setAmountToApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "fail",
        type: "bool",
      },
    ],
    name: "setFailExecutionTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "setSimulateEOA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "simulateEOA",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161087338038061087383398101604081905261002f916100d8565b80806001600160a01b03166080816001600160a01b031681525050806001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610088573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ac91906100d8565b6001600160a01b031660a052506100fc9050565b6001600160a01b03811681146100d557600080fd5b50565b6000602082840312156100ea57600080fd5b81516100f5816100c0565b9392505050565b60805160a05161074c61012760003960008181610163015261043c015260006092015261074c6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80635e76bba31161005b5780635e76bba31461014d5780637535d2461461015e578063bf443f8514610185578063e9a6a25b1461019857600080fd5b80630542975c1461008d5780631b11d0ff146100de578063388f70f1146101015780634444f33114610142575b600080fd5b6100b47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100f16100ec36600461058e565b6101d7565b60405190151581526020016100d5565b61014061010f3660046106a3565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b005b60025460ff166100f1565b6001546040519081526020016100d5565b6100b47f000000000000000000000000000000000000000000000000000000000000000081565b6101406101933660046106c7565b600155565b6101406101a63660046106a3565b600280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b6000805460ff1615610247576040805173ffffffffffffffffffffffffffffffffffffffff88168152602081018790529081018590527f816f6a6bc084e1996be1a831afa1af30763d0501b6b43b9e1922a11f347366d79060600160405180910390a15060025460ff1615610517565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152869073ffffffffffffffffffffffffffffffffffffffff8216906370a0823190602401602060405180830381865afa1580156102b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d791906106e0565b861115610344576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f496e76616c69642062616c616e636520666f722074686520636f6e7472616374604482015260640160405180910390fd5b6000600154600014156103605761035b8787610520565b610364565b6001545b6040517f40c10f190000000000000000000000000000000000000000000000000000000081523060048201526024810188905290915073ffffffffffffffffffffffffffffffffffffffff8316906340c10f19906044016020604051808303816000875af11580156103da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fe91906106f9565b506040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820183905289169063095ea7b3906044016020604051808303816000875af1158015610494573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b891906106f9565b506040805173ffffffffffffffffffffffffffffffffffffffff8a168152602081018990529081018790527f7d94e9d0c906b8d7b2b52a581b9e9ba728aa6f8cd8532bd87243d193f47401be9060600160405180910390a16001925050505b95945050505050565b8082018281101561053057600080fd5b92915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461055a57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080600080600060a086880312156105a657600080fd5b6105af86610536565b945060208601359350604086013592506105cb60608701610536565b9150608086013567ffffffffffffffff808211156105e857600080fd5b818801915088601f8301126105fc57600080fd5b81358181111561060e5761060e61055f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156106545761065461055f565b816040528281528b602084870101111561066d57600080fd5b8260208601602083013760006020848301015280955050505050509295509295909350565b80151581146106a057600080fd5b50565b6000602082840312156106b557600080fd5b81356106c081610692565b9392505050565b6000602082840312156106d957600080fd5b5035919050565b6000602082840312156106f257600080fd5b5051919050565b60006020828403121561070b57600080fd5b81516106c08161069256fea2646970667358221220bc7485ffb04ceea8e9fb30aa95f79f1689e3249af5e62aaf795c869dcd80761264736f6c634300080a0033";

type MockFlashLoanSimpleReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockFlashLoanSimpleReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockFlashLoanSimpleReceiver__factory extends ContractFactory {
  constructor(...args: MockFlashLoanSimpleReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockFlashLoanSimpleReceiver> {
    return super.deploy(
      provider,
      overrides || {}
    ) as Promise<MockFlashLoanSimpleReceiver>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  override attach(address: string): MockFlashLoanSimpleReceiver {
    return super.attach(address) as MockFlashLoanSimpleReceiver;
  }
  override connect(signer: Signer): MockFlashLoanSimpleReceiver__factory {
    return super.connect(signer) as MockFlashLoanSimpleReceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFlashLoanSimpleReceiverInterface {
    return new utils.Interface(_abi) as MockFlashLoanSimpleReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFlashLoanSimpleReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockFlashLoanSimpleReceiver;
  }
}
