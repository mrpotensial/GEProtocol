"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAggregator__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "int256",
                name: "initialAnswer",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "int256",
                name: "current",
                type: "int256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "roundId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256",
            },
        ],
        name: "AnswerUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "getTokenType",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "latestAnswer",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060405161013838038061013883398101604081905261002f9161006f565b600081815560405142815282907f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f9060200160405180910390a350610088565b60006020828403121561008157600080fd5b5051919050565b60a2806100966000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063313ce56714604157806350d25bcd146055578063fcab1819146066575b600080fd5b604051600881526020015b60405180910390f35b6000545b604051908152602001604c565b6001605956fea2646970667358221220f0cdec7e455e88df72a271e04f233a0a504843bda6ee29c9575ae83cd5f046cf64736f6c634300080a0033";
const isSuperArgs = (xs) => xs.length > 1;
class MockAggregator__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(initialAnswer, overrides) {
        return super.deploy(initialAnswer, overrides || {});
    }
    getDeployTransaction(initialAnswer, overrides) {
        return super.getDeployTransaction(initialAnswer, overrides || {});
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
exports.MockAggregator__factory = MockAggregator__factory;
MockAggregator__factory.bytecode = _bytecode;
MockAggregator__factory.abi = _abi;
