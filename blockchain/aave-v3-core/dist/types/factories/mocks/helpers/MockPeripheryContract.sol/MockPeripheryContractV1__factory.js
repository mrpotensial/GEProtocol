"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockPeripheryContractV1__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "getManager",
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
        inputs: [
            {
                internalType: "address",
                name: "manager",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newManager",
                type: "address",
            },
        ],
        name: "setManager",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506101cd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063cd6dc68714610046578063d0ebdbe7146100a1578063d5009584146100f6575b600080fd5b61009f61005436600461014b565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9390931692909217909155600155565b005b61009f6100af366004610175565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b803573ffffffffffffffffffffffffffffffffffffffff8116811461014657600080fd5b919050565b6000806040838503121561015e57600080fd5b61016783610122565b946020939093013593505050565b60006020828403121561018757600080fd5b61019082610122565b939250505056fea2646970667358221220eca9b28a5e720f2c23a76466bcf567d4f865fd67b02882a6a2647eb86f0006b364736f6c634300080a0033";
const isSuperArgs = (xs) => xs.length > 1;
class MockPeripheryContractV1__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockPeripheryContractV1__factory = MockPeripheryContractV1__factory;
MockPeripheryContractV1__factory.bytecode = _bytecode;
MockPeripheryContractV1__factory.abi = _abi;
