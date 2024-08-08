/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { MockwBTC, MockwBTCInterface } from "../MockwBTC";

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405260086080819052674d6f636b7742544360c01b60a090815261002991600391906100ac565b50604080518082019091526004808252637742544360e01b602090920191825261005391816100ac565b5034801561006057600080fd5b5061007d3368056bc75e2d631000006001600160e01b0361008216565b610147565b6001600160a01b039091166000908152602081905260409020805482019055600280549091019055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100ed57805160ff191683800117855561011a565b8280016001018555821561011a579182015b8281111561011a5782518255916020019190600101906100ff565b5061012692915061012a565b5090565b61014491905b808211156101265760008155600101610130565b90565b610530806101566000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce567146101a557806370a08231146101c357806395d89b41146101e9578063a9059cbb146101f1578063dd62ed3e1461021d57610093565b806306fdde0314610098578063095ea7b31461011557806318160ddd1461015557806323b872dd1461016f575b600080fd5b6100a061024b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100da5781810151838201526020016100c2565b50505050905090810190601f1680156101075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101416004803603604081101561012b57600080fd5b506001600160a01b0381351690602001356102e1565b604080519115158252519081900360200190f35b61015d6102f9565b60408051918252519081900360200190f35b6101416004803603606081101561018557600080fd5b506001600160a01b038135811691602081013590911690604001356102ff565b6101ad610323565b6040805160ff9092168252519081900360200190f35b61015d600480360360208110156101d957600080fd5b50356001600160a01b0316610328565b6100a0610343565b6101416004803603604081101561020757600080fd5b506001600160a01b0381351690602001356103a4565b61015d6004803603604081101561023357600080fd5b506001600160a01b03813581169160200135166103b2565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156102d75780601f106102ac576101008083540402835291602001916102d7565b820191906000526020600020905b8154815290600101906020018083116102ba57829003601f168201915b5050505050905090565b6000336102ef8185856103dd565b5060019392505050565b60025490565b60003361030d8582856103ef565b610318858585610412565b506001949350505050565b601290565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156102d75780601f106102ac576101008083540402835291602001916102d7565b6000336102ef818585610412565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6103ea838383600161047c565b505050565b60006103fb84846103b2565b905061040c8484848403600061047c565b50505050565b6001600160a01b0380841660008181526020818152604080832080548790039055938616808352918490208054860190558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3505050565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561040c57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35050505056fea265627a7a72315820e559aeb460770ce0a0a2f65832dce3a24c2f3c76ea6a78216f0b3e1bdf9bf99564736f6c63430005100032";

type MockwBTCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockwBTCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockwBTC__factory extends ContractFactory {
  constructor(...args: MockwBTCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockwBTC & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockwBTC__factory {
    return super.connect(runner) as MockwBTC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockwBTCInterface {
    return new Interface(_abi) as MockwBTCInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockwBTC {
    return new Contract(address, _abi, runner) as unknown as MockwBTC;
  }
}
