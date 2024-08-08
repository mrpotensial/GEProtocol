/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PriceOracleSentinel,
  PriceOracleSentinelInterface,
} from "../../../protocol/configuration/PriceOracleSentinel";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "contract ISequencerOracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gracePeriod",
        type: "uint256",
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
        internalType: "uint256",
        name: "newGracePeriod",
        type: "uint256",
      },
    ],
    name: "GracePeriodUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSequencerOracle",
        type: "address",
      },
    ],
    name: "SequencerOracleUpdated",
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
    name: "getGracePeriod",
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
    inputs: [],
    name: "getSequencerOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isBorrowAllowed",
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
  {
    inputs: [],
    name: "isLiquidationAllowed",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newGracePeriod",
        type: "uint256",
      },
    ],
    name: "setGracePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newSequencerOracle",
        type: "address",
      },
    ],
    name: "setSequencerOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161095538038061095583398101604081905261002f91610076565b6001600160a01b03928316608052600080546001600160a01b03191692909316919091179091556001556100b9565b6001600160a01b038116811461007357600080fd5b50565b60008060006060848603121561008b57600080fd5b83516100968161005e565b60208501519093506100a78161005e565b80925050604084015190509250925092565b6080516108746100e160003960008181608701528181610155015261036a01526108746000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637a5d20ea1161005b5780637a5d20ea146100f1578063dbd1838814610109578063f0aef31c1461011a578063f2f659601461012f57600080fd5b80630542975c1461008257806312168dc2146100d357806349aa2e81146100f1575b600080fd5b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b60005473ffffffffffffffffffffffffffffffffffffffff166100a9565b6100f9610142565b60405190151581526020016100ca565b6001546040519081526020016100ca565b61012d6101283660046106a2565b610151565b005b61012d61013d3660046106c6565b610366565b600061014c6105c0565b905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e291906106df565b6040517f7be53ca100000000000000000000000000000000000000000000000000000000815233600482015290915073ffffffffffffffffffffffffffffffffffffffff821690637be53ca190602401602060405180830381865afa15801561024f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027391906106fc565b6040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250906102ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e1919061071e565b60405180910390fd5b50600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040519081527f95cbf1d8f44ec81ff345ed9cf2fe53b6a6473e072bf046ee412f198c54dba449906020015b60405180910390a15050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f791906106df565b6040517f674b5e4d00000000000000000000000000000000000000000000000000000000815233600482015290915073ffffffffffffffffffffffffffffffffffffffff82169063674b5e4d90602401602060405180830381865afa158015610464573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048891906106fc565b8061051c57506040517f7be53ca100000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff821690637be53ca190602401602060405180830381865afa1580156104f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051c91906106fc565b6040518060400160405280600181526020017f34000000000000000000000000000000000000000000000000000000000000008152509061058a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e1919061071e565b5060018290556040518281527f33d1191f5a3abfe19d468d51bb5ece97489f1277a912a5b5c65992fc279ad3d49060200161035a565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610631573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065591906107b0565b5093505092505081600014801561067657506001546106748242610800565b115b9250505090565b73ffffffffffffffffffffffffffffffffffffffff8116811461069f57600080fd5b50565b6000602082840312156106b457600080fd5b81356106bf8161067d565b9392505050565b6000602082840312156106d857600080fd5b5035919050565b6000602082840312156106f157600080fd5b81516106bf8161067d565b60006020828403121561070e57600080fd5b815180151581146106bf57600080fd5b600060208083528351808285015260005b8181101561074b5785810183015185820160400152820161072f565b8181111561075d576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b805169ffffffffffffffffffff811681146107ab57600080fd5b919050565b600080600080600060a086880312156107c857600080fd5b6107d186610791565b94506020860151935060408601519250606086015191506107f460808701610791565b90509295509295909350565b600082821015610839577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50039056fea26469706673582212208e2e87e4ecd8046960b7bdb3e12e8ae397fead10c61338dcab7ae456e8dfd05464736f6c634300080a0033";

type PriceOracleSentinelConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceOracleSentinelConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceOracleSentinel__factory extends ContractFactory {
  constructor(...args: PriceOracleSentinelConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    provider: PromiseOrValue<string>,
    oracle: PromiseOrValue<string>,
    gracePeriod: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PriceOracleSentinel> {
    return super.deploy(
      provider,
      oracle,
      gracePeriod,
      overrides || {}
    ) as Promise<PriceOracleSentinel>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    oracle: PromiseOrValue<string>,
    gracePeriod: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      provider,
      oracle,
      gracePeriod,
      overrides || {}
    );
  }
  override attach(address: string): PriceOracleSentinel {
    return super.attach(address) as PriceOracleSentinel;
  }
  override connect(signer: Signer): PriceOracleSentinel__factory {
    return super.connect(signer) as PriceOracleSentinel__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceOracleSentinelInterface {
    return new utils.Interface(_abi) as PriceOracleSentinelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceOracleSentinel {
    return new Contract(address, _abi, signerOrProvider) as PriceOracleSentinel;
  }
}
