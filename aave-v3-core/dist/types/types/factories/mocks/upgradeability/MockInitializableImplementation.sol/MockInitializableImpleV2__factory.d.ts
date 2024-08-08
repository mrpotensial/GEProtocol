import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { MockInitializableImpleV2, MockInitializableImpleV2Interface } from "../../../../mocks/upgradeability/MockInitializableImplementation.sol/MockInitializableImpleV2";
type MockInitializableImpleV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockInitializableImpleV2__factory extends ContractFactory {
    constructor(...args: MockInitializableImpleV2ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockInitializableImpleV2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockInitializableImpleV2;
    connect(signer: Signer): MockInitializableImpleV2__factory;
    static readonly bytecode = "0x60806040526000805534801561001457600080fd5b506106bd806100246000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635dd216101161005b5780635dd21610146100b75780635e383d21146100cc578063d31f8b6b146100df578063dde43cba146100f257600080fd5b80631f1bd692146100825780633fa4f245146100a057806355241077146100b7575b600080fd5b61008a6100fa565b60405161009791906103cb565b60405180910390f35b6100a960345481565b604051908152602001610097565b6100ca6100c536600461043e565b603455565b005b6100a96100da36600461043e565b610188565b6100ca6100ed366004610555565b6101a9565b6100a9600281565b6035805461010790610633565b80601f016020809104026020016040519081016040528092919081815260200182805461013390610633565b80156101805780601f1061015557610100808354040283529160200191610180565b820191906000526020600020905b81548152906001019060200180831161016357829003601f168201915b505050505081565b6036818154811061019857600080fd5b600091825260209091200154905081565b60015460029060ff16806101bc5750303b155b806101c8575060005481115b610258576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a6564000000000000000000000000000000000000606482015260840160405180910390fd5b60015460ff1615801561029557600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168117905560008290555b603485905583516102ad9060359060208701906102f8565b5082516102c190603690602086019061037c565b5080156102f157600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b5050505050565b82805461030490610633565b90600052602060002090601f016020900481019282610326576000855561036c565b82601f1061033f57805160ff191683800117855561036c565b8280016001018555821561036c579182015b8281111561036c578251825591602001919060010190610351565b506103789291506103b6565b5090565b82805482825590600052602060002090810192821561036c579160200282018281111561036c578251825591602001919060010190610351565b5b8082111561037857600081556001016103b7565b600060208083528351808285015260005b818110156103f8578581018301518582016040015282016103dc565b8181111561040a576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60006020828403121561045057600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156104cd576104cd610457565b604052919050565b600082601f8301126104e657600080fd5b8135602067ffffffffffffffff82111561050257610502610457565b8160051b610511828201610486565b928352848101820192828101908785111561052b57600080fd5b83870192505b8483101561054a57823582529183019190830190610531565b979650505050505050565b60008060006060848603121561056a57600080fd5b8335925060208085013567ffffffffffffffff8082111561058a57600080fd5b818701915087601f83011261059e57600080fd5b8135818111156105b0576105b0610457565b6105e0847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610486565b81815289858386010111156105f457600080fd5b81858501868301376000918101909401529193506040860135918083111561061b57600080fd5b5050610629868287016104d5565b9150509250925092565b600181811c9082168061064757607f821691505b60208210811415610681577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220dbdb4dbe8b906b01dd3c7aece96898d531211bd2ec2f1ce7291d50984a10766264736f6c634300080a0033";
    static readonly abi: {
        inputs: {
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
    }[];
    static createInterface(): MockInitializableImpleV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockInitializableImpleV2;
}
export {};
//# sourceMappingURL=MockInitializableImpleV2__factory.d.ts.map