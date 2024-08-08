import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { DefaultReserveInterestRateStrategy, DefaultReserveInterestRateStrategyInterface } from "../../../protocol/pool/DefaultReserveInterestRateStrategy";
type DefaultReserveInterestRateStrategyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DefaultReserveInterestRateStrategy__factory extends ContractFactory {
    constructor(...args: DefaultReserveInterestRateStrategyConstructorParams);
    deploy(provider: PromiseOrValue<string>, optimalUsageRatio: PromiseOrValue<BigNumberish>, baseVariableBorrowRate: PromiseOrValue<BigNumberish>, variableRateSlope1: PromiseOrValue<BigNumberish>, variableRateSlope2: PromiseOrValue<BigNumberish>, stableRateSlope1: PromiseOrValue<BigNumberish>, stableRateSlope2: PromiseOrValue<BigNumberish>, baseStableRateOffset: PromiseOrValue<BigNumberish>, stableRateExcessOffset: PromiseOrValue<BigNumberish>, optimalStableToTotalDebtRatio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<DefaultReserveInterestRateStrategy>;
    getDeployTransaction(provider: PromiseOrValue<string>, optimalUsageRatio: PromiseOrValue<BigNumberish>, baseVariableBorrowRate: PromiseOrValue<BigNumberish>, variableRateSlope1: PromiseOrValue<BigNumberish>, variableRateSlope2: PromiseOrValue<BigNumberish>, stableRateSlope1: PromiseOrValue<BigNumberish>, stableRateSlope2: PromiseOrValue<BigNumberish>, baseStableRateOffset: PromiseOrValue<BigNumberish>, stableRateExcessOffset: PromiseOrValue<BigNumberish>, optimalStableToTotalDebtRatio: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): DefaultReserveInterestRateStrategy;
    connect(signer: Signer): DefaultReserveInterestRateStrategy__factory;
    static readonly bytecode = "0x61020060405234801561001157600080fd5b5060405162000f7538038062000f7583398101604081905261003291610146565b886b033b2e3c9fd0803ce8000000101560405180604001604052806002815260200161383360f01b815250906100845760405162461bcd60e51b815260040161007b91906101d1565b60405180910390fd5b50806b033b2e3c9fd0803ce80000001015604051806040016040528060028152602001610e0d60f21b815250906100ce5760405162461bcd60e51b815260040161007b91906101d1565b5060808990526100ea896b033b2e3c9fd0803ce8000000610226565b60c05260a0819052610108816b033b2e3c9fd0803ce8000000610226565b60e052506001600160a01b0390981661010052610120959095526101409390935261016091909152610180526101a0526101c052506101e05261024b565b6000806000806000806000806000806101408b8d03121561016657600080fd5b8a516001600160a01b038116811461017d57600080fd5b809a505060208b0151985060408b0151975060608b0151965060808b0151955060a08b0151945060c08b0151935060e08b015192506101008b015191506101208b015190509295989b9194979a5092959850565b600060208083528351808285015260005b818110156101fe578581018301518582016040015282016101e2565b81811115610210576000604083870101525b50601f01601f1916929092016040019392505050565b60008282101561024657634e487b7160e01b600052601160045260246000fd5b500390565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610c0d62000368600039600081816102710152610821015260006108c601526000818161017201526105ec0152600081816102970152818161061701526106ec0152600081816102bd0152818161030c0152610654015260008181610142015281816103300152818161067f0152818161075e01526108e70152600081816101980152818161035101526103fa0152600060f40152600081816102e601526107cb01526000818161024501526105900152600081816101e80152818161079a01526107ec0152600081816101c10152818161055f015281816105b1015281816106c301526107380152610c0d6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063a58987091161008c578063bc62690811610066578063bc6269081461026f578063d5cd739114610295578063f4202409146102bb578063fe5fd698146102e157600080fd5b8063a589870914610212578063a9c622f814610240578063acd786861461026757600080fd5b806334762ca5116100c857806334762ca51461019657806354c365c6146101bc5780636fb92589146101e357806380031e371461020a57600080fd5b80630542975c146100ef5780630b3429a21461014057806314e32da414610170575b600080fd5b6101167f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b7f00000000000000000000000000000000000000000000000000000000000000005b604051908152602001610137565b7f0000000000000000000000000000000000000000000000000000000000000000610162565b7f0000000000000000000000000000000000000000000000000000000000000000610162565b6101627f000000000000000000000000000000000000000000000000000000000000000081565b6101627f000000000000000000000000000000000000000000000000000000000000000081565b610162610308565b610225610220366004610adb565b610384565b60408051938452602084019290925290820152606001610137565b6101627f000000000000000000000000000000000000000000000000000000000000000081565b6101626108bf565b7f0000000000000000000000000000000000000000000000000000000000000000610162565b7f0000000000000000000000000000000000000000000000000000000000000000610162565b7f0000000000000000000000000000000000000000000000000000000000000000610162565b6101627f000000000000000000000000000000000000000000000000000000000000000081565b60007f00000000000000000000000000000000000000000000000000000000000000006103757f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610b8f565b61037f9190610b8f565b905090565b60008060006103d86040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b846080015185606001516103ec9190610b8f565b6020820152600060808201527f000000000000000000000000000000000000000000000000000000000000000060408201526104266108bf565b606082015260208101511561055d57602081015160608601516104489161090b565b60e08083019190915260408087015160208801519288015161010089015192517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff938416600482015291939216906370a0823190602401602060405180830381865afa1580156104d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f79190610ba7565b6105019190610b8f565b61050b9190610bc0565b808252602082015161051c91610b8f565b610100820181905260208201516105329161090b565b60a082015284516101008201516105579161054c91610b8f565b60208301519061090b565b60c08201525b7f00000000000000000000000000000000000000000000000000000000000000008160a0015111156106be5760006105e57f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008460a001516105df9190610bc0565b9061090b565b90506106117f00000000000000000000000000000000000000000000000000000000000000008261094a565b61063b907f0000000000000000000000000000000000000000000000000000000000000000610b8f565b8260600181815161064c9190610b8f565b9052506106797f00000000000000000000000000000000000000000000000000000000000000008261094a565b6106a3907f0000000000000000000000000000000000000000000000000000000000000000610b8f565b826040018181516106b49190610b8f565b9052506107989050565b6107197f00000000000000000000000000000000000000000000000000000000000000006105df8360a001517f000000000000000000000000000000000000000000000000000000000000000061094a90919063ffffffff16565b8160600181815161072a9190610b8f565b90525060a0810151610783907f0000000000000000000000000000000000000000000000000000000000000000906105df907f00000000000000000000000000000000000000000000000000000000000000009061094a565b816040018181516107949190610b8f565b9052505b7f00000000000000000000000000000000000000000000000000000000000000008160e00151111561085c57600061081a7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008460e001516105df9190610bc0565b90506108467f00000000000000000000000000000000000000000000000000000000000000008261094a565b826060018181516108579190610b8f565b905250505b6108a18560c001516127106108719190610bc0565b61089b8360c0015161089589606001518a6080015187604001518c60a001516109a1565b9061094a565b90610a08565b60808201819052606082015160409092015190969195509350915050565b600061037f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610b8f565b600081156b033b2e3c9fd0803ce80000006002840419048411171561092f57600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff8390048411151761097f57600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6000806109ae8587610b8f565b9050806109bf576000915050610a00565b60006109ce8561089588610a4b565b905060006109df856108958a610a4b565b905060006109f96109ef85610a4b565b6105df8486610b8f565b9450505050505b949350505050565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec7783900484111517610a3d57600080fd5b506127109102611388010490565b633b9aca008181029081048214610a6157600080fd5b919050565b604051610120810167ffffffffffffffff81118282101715610ab1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a6157600080fd5b60006101208284031215610aee57600080fd5b610af6610a66565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c0820152610b4260e08401610ab7565b60e0820152610100610b55818501610ab7565b908201529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610ba257610ba2610b60565b500190565b600060208284031215610bb957600080fd5b5051919050565b600082821015610bd257610bd2610b60565b50039056fea2646970667358221220f1e92c2f40dc3cef47809ecfaf576df226cdd354a99c1d82b228c4c71b0e0dc164736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): DefaultReserveInterestRateStrategyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DefaultReserveInterestRateStrategy;
}
export {};
//# sourceMappingURL=DefaultReserveInterestRateStrategy__factory.d.ts.map