/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ReserveConfiguration,
  ReserveConfigurationInterface,
} from "../../../../protocol/libraries/configuration/ReserveConfiguration";

const _abi = [
  {
    inputs: [],
    name: "DEBT_CEILING_DECIMALS",
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
    name: "MAX_RESERVES_COUNT",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60ab610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c8063280d5de914604257806331b561ba14605c575b600080fd5b6049600281565b6040519081526020015b60405180910390f35b6063608081565b60405161ffff9091168152602001605356fea26469706673582212201a8e3d05ec8c67e18e5bced0ec5a683f950802de051e07fecb02266947af7f8364736f6c634300080a0033";

type ReserveConfigurationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReserveConfigurationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReserveConfiguration__factory extends ContractFactory {
  constructor(...args: ReserveConfigurationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReserveConfiguration> {
    return super.deploy(overrides || {}) as Promise<ReserveConfiguration>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReserveConfiguration {
    return super.attach(address) as ReserveConfiguration;
  }
  override connect(signer: Signer): ReserveConfiguration__factory {
    return super.connect(signer) as ReserveConfiguration__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveConfigurationInterface {
    return new utils.Interface(_abi) as ReserveConfigurationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveConfiguration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReserveConfiguration;
  }
}
