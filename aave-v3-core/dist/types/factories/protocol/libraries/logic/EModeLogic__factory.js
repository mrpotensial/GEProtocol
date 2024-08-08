"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EModeLogic__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "categoryId",
                type: "uint8",
            },
        ],
        name: "UserEModeSet",
        type: "event",
    },
];
const _bytecode = "0x61146e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80635d5dc3131461003a575b600080fd5b81801561004657600080fd5b5061005a610055366004611192565b61005c565b005b60408051602081018252835481528251918301516100809289928992899290610145565b336000908152602084905260409081902080549183015160ff9081167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008416179091551680156100fe576100fb87878786604051806020016040529081600082015481525050338760400151886000015189602001516102e0565b50505b604080830151905160ff909116815233907fd728da875fc88944cbf17638bcbe4af0eedaef63becd1d1c57cc097eb4608d849060200160405180910390a250505050505050565b60ff81161580610170575060ff811660009081526020859052604090205462010000900461ffff1615155b6040518060400160405280600281526020017f3538000000000000000000000000000000000000000000000000000000000000815250906101e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101de91906112a7565b60405180910390fd5b5082516101f3576102d8565b60ff8116156102d85760005b828110156102d65761021184826103db565b156102ce576000818152602087815260408083205473ffffffffffffffffffffffffffffffffffffffff168352898252918290208251918201909252905480825260ff8481169160a81c16146040518060400160405280600281526020017f3538000000000000000000000000000000000000000000000000000000000000815250906102cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101de91906112a7565b50505b6001016101ff565b505b505050505050565b6000806000806103478c8c8c6040518060a001604052808e81526020018b81526020018d73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018c60ff1681525061045d565b9550955050505050670de0b6b3a76400008210156040518060400160405280600281526020017f3335000000000000000000000000000000000000000000000000000000000000815250906103c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101de91906112a7565b50909b909a5098505050505050505050565b60408051808201909152600281527f373400000000000000000000000000000000000000000000000000000000000060208201526000906080831061044d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101de91906112a7565b50509051600191821b1c16151590565b6000806000806000806104738760000151511590565b156104af5750600094508493508392508291507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050816109ba565b61055e60405180610260016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000151581525090565b608088015160ff16156105a357608088015160ff16600090815260208a905260409020606089015161059091906109c7565b6101808401526101c08301526101a08201525b87602001518160c0015110156108c25760c081015188516105c391610aa6565b6105d75760c08101805160010190526105a3565b60c0810151600090815260208b9052604090205473ffffffffffffffffffffffffffffffffffffffff16610200820181905261061d5760c08101805160010190526105a3565b61020081015173ffffffffffffffffffffffffffffffffffffffff16600090815260208c8152604091829020825180830190935280549283905260ff60a884901c81166101e0860152603084901c166060850181905261ffff601085901c811660a08701529093166080850152600a9290920a90830152610180820151158015906106b35750816101e00151896080015160ff16145b6107575760608901516102008301516040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291169063b3596f0790602401602060405180830381865afa15801561072e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610752919061131a565b61075e565b8161018001515b825260a08201511580159061077e575060c0820151895161077e91610b2b565b1561086e5761079b89604001518284600001518560200151610baf565b60408301819052610100830180516107b4908390611362565b90525060808901516101e08301516107cf9160ff1690610c8e565b1515610240830152608082015115610825578161024001516107f55781608001516107fc565b816101a001515b826040015161080b919061137a565b826101400181815161081d9190611362565b90525061082e565b60016102208301525b816102400151610842578160a00151610849565b816101c001515b8260400151610858919061137a565b826101600181815161086a9190611362565b9052505b60c0820151895161087e916103db565b156108b15761089b89604001518284600001518560200151610ca5565b82610120018181516108ad9190611362565b9052505b5060c08101805160010190526105a3565b6101008101516108d35760006108ee565b806101000151816101400151816108ec576108ec6113b7565b045b610140820152610100810151610905576000610920565b8061010001518161016001518161091e5761091e6113b7565b045b610160820152610120810151156109625761095d816101200151610957836101600151846101000151610e2590919063ffffffff16565b90610e68565b610984565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b60e0820181905261010082015161012083015161014084015161016085015161022090950151929a509098509650919450925090505b9499939850945094509450565b81546000908190819081906601000000000000900473ffffffffffffffffffffffffffffffffffffffff168015610a8b576040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff828116600483015287169063b3596f0790602401602060405180830381865afa158015610a64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a88919061131a565b91505b50945461ffff80821697620100009092041695945092505050565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310610b18576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101de91906112a7565b5050905160019190911b1c600316151590565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310610b9d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101de91906112a7565b50509051600191821b82011c16151590565b600080610bbb85610e9f565b6004868101546040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a8116938201939093529293506000928792610c67928692911690631da24f3e90602401602060405180830381865afa158015610c3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c61919061131a565b90610f23565b610c71919061137a565b9050838181610c8257610c826113b7565b04979650505050505050565b60008215801590610c9e57508282145b9392505050565b60068301546040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526000928392911690631da24f3e90602401602060405180830381865afa158015610d1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3f919061131a565b90508015610d5d57610d5a610d5386610f7a565b8290610f23565b90505b60058501546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152909116906370a0823190602401602060405180830381865afa158015610dcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df3919061131a565b610dfd9082611362565b9050610e09818561137a565b9050828181610e1a57610e1a6113b7565b049695505050505050565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec7783900484111517610e5a57600080fd5b506127109102611388010490565b60008115670de0b6b3a764000060028404190484111715610e8857600080fd5b50670de0b6b3a76400009190910260028204010490565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415610ee5575050600101546fffffffffffffffffffffffffffffffff1690565b6001830154610c9e906fffffffffffffffffffffffffffffffff80821691610c61917001000000000000000000000000000000009091041684610ffe565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff83900484111517610f5857600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415610fc0575050600201546fffffffffffffffffffffffffffffffff1690565b6002830154610c9e906fffffffffffffffffffffffffffffffff80821691610c61917001000000000000000000000000000000009091041684611043565b60008061101264ffffffffff8416426113e6565b61101c908561137a565b6301e133809004905061103b816b033b2e3c9fd0803ce8000000611362565b949350505050565b6000610c9e83834260008061105f64ffffffffff8516846113e6565b90508061107b576b033b2e3c9fd0803ce8000000915050610c9e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810160008080600285116110b15760006110b6565b600285035b925066038882915c40006110ca8a80610f23565b816110d7576110d76113b7565b0491506301e133806110e9838b610f23565b816110f6576110f66113b7565b049050600082611106868861137a565b611110919061137a565b60029004905060008285611124888a61137a565b61112e919061137a565b611138919061137a565b60069004905080826301e1338061114f8a8f61137a565b61115991906113fd565b61116f906b033b2e3c9fd0803ce8000000611362565b6111799190611362565b6111839190611362565b9b9a5050505050505050505050565b6000806000806000808688036101008112156111ad57600080fd5b873596506020880135955060408801359450606088013593506080880135925060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60820112156111fd57600080fd5b506040516060810181811067ffffffffffffffff82111715611248577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405260a0880135815260c088013573ffffffffffffffffffffffffffffffffffffffff8116811461127957600080fd5b602082015260e088013560ff8116811461129257600080fd5b80604083015250809150509295509295509295565b600060208083528351808285015260005b818110156112d4578581018301518582016040015282016112b8565b818111156112e6576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60006020828403121561132c57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561137557611375611333565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113b2576113b2611333565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000828210156113f8576113f8611333565b500390565b600082611433577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea26469706673582212202c62f8da245632d62b473e996662e92326dfe4623b6e5bc5fe41492f6033e41764736f6c634300080a0033";
const isSuperArgs = (xs) => xs.length > 1;
class EModeLogic__factory extends ethers_1.ContractFactory {
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
exports.EModeLogic__factory = EModeLogic__factory;
EModeLogic__factory.bytecode = _bytecode;
EModeLogic__factory.abi = _abi;
