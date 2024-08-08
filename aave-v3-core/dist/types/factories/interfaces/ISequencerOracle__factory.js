"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISequencerOracle__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "latestRoundData",
        outputs: [
            {
                internalType: "uint80",
                name: "roundId",
                type: "uint80",
            },
            {
                internalType: "int256",
                name: "answer",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "startedAt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256",
            },
            {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class ISequencerOracle__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ISequencerOracle__factory = ISequencerOracle__factory;
ISequencerOracle__factory.abi = _abi;
