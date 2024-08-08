import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { FlashLoanLogic, FlashLoanLogicInterface } from "../../../../protocol/libraries/logic/FlashLoanLogic";
type FlashLoanLogicConstructorParams = [linkLibraryAddresses: FlashLoanLogicLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FlashLoanLogic__factory extends ContractFactory {
    constructor(...args: FlashLoanLogicConstructorParams);
    static linkBytecode(linkLibraryAddresses: FlashLoanLogicLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<FlashLoanLogic>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): FlashLoanLogic;
    connect(signer: Signer): FlashLoanLogic__factory;
    static readonly bytecode = "0x612b8761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80632e7263ea14610045578063a1fe0e8d14610067575b600080fd5b81801561005157600080fd5b506100656100603660046122ee565b610087565b005b81801561007357600080fd5b5061006561008236600461248b565b61097c565b61009a8582602001518360400151610be8565b6101066040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016060815260200160008152602001600081525090565b81602001515167ffffffffffffffff81111561012457610124612036565b60405190808252806020026020018201604052801561014d578160200160208202803683370190505b506080820152815173ffffffffffffffffffffffffffffffffffffffff1681526101a0820151610187578161010001518260e0015161018b565b6000805b60c083015260a0820152600060208201525b8160200151518160200151101561034f5781604001518160200151815181106101c8576101c8612555565b60209081029190910101516060820152600082606001518260200151815181106101f4576101f4612555565b6020026020010151600281111561020d5761020d612584565b600281111561021e5761021e612584565b1461022a57600061023d565b60a0810151606082015161023d91610cd9565b816080015182602001518151811061025757610257612555565b602002602001018181525050856000836020015183602001518151811061028057610280612555565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff90811683529082019290925260409081016000206004908101548551606086015193517f4efecaa5000000000000000000000000000000000000000000000000000000008152908516928101929092526024820192909252911690634efecaa590604401600060405180830381600087803b15801561031f57600080fd5b505af1158015610333573d6000803e3d6000fd5b5050506020820180519150610347826125e2565b90525061019d565b806000015173ffffffffffffffffffffffffffffffffffffffff1663920f5c84836020015184604001518460800151338760a001516040518663ffffffff1660e01b81526004016103a49594939291906126c1565b6020604051808303816000875af11580156103c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e79190612775565b6040518060400160405280600281526020017f31330000000000000000000000000000000000000000000000000000000000008152509061045e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104559190612792565b60405180910390fd5b50600060208201525b8160200151518160200151101561097457816020015181602001518151811061049257610492612555565b6020026020010151816040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081604001518160200151815181106104eb576104eb612555565b602090810291909101015160608201526000826060015182602001518151811061051757610517612555565b6020026020010151600281111561053057610530612584565b600281111561054157610541612584565b141561062857610623866000836040015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c001604052808460600151815260200184608001518560200151815181106105bb576105bb612555565b602002602001015181526020018460c001518152602001846040015173ffffffffffffffffffffffffffffffffffffffff168152602001856000015173ffffffffffffffffffffffffffffffffffffffff1681526020018560c0015161ffff16815250610d1c565b61095c565b73__$c3724b8d563dc83a94e797176cddecb3b9$__631e6473f987878787604051806101800160405280886040015173ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001896080015173ffffffffffffffffffffffffffffffffffffffff1681526020018860600151815260200189606001518960200151815181106106d2576106d2612555565b602002602001015160028111156106eb576106eb612584565b60028111156106fc576106fc612584565b81526020018960c0015161ffff1681526020016000151581526020018961012001518152602001896101400151815260200189610160015173ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa15801561077e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a291906127a5565b73ffffffffffffffffffffffffffffffffffffffff16815260200189610180015160ff16815260200189610160015173ffffffffffffffffffffffffffffffffffffffff16635eb88d3d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561081b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083f91906127a5565b73ffffffffffffffffffffffffffffffffffffffff168152506040518663ffffffff1660e01b81526004016108789594939291906127fd565b60006040518083038186803b15801561089057600080fd5b505af41580156108a4573d6000803e3d6000fd5b505050508160c0015161ffff16816040015173ffffffffffffffffffffffffffffffffffffffff16836000015173ffffffffffffffffffffffffffffffffffffffff167fefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f0338560600151876060015187602001518151811061092857610928612555565b6020026020010151600281111561094157610941612584565b60006040516109539493929190612925565b60405180910390a45b6020810180519061096c826125e2565b905250610467565b505050505050565b61098582611030565b805160c0820151604083015160009161099e9190610cd9565b600480860154855160408088015190517f4efecaa500000000000000000000000000000000000000000000000000000000815294955073ffffffffffffffffffffffffffffffffffffffff90921693634efecaa593610a1f93910173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b158015610a3957600080fd5b505af1158015610a4d573d6000803e3d6000fd5b505050506020830151604080850151606086015191517f1b11d0ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861693631b11d0ff93610ab693919287913391600401612965565b6020604051808303816000875af1158015610ad5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af99190612775565b6040518060400160405280600281526020017f313300000000000000000000000000000000000000000000000000000000000081525090610b67576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104559190612792565b50610be2846040518060c00160405280866040015181526020018481526020018660a001518152602001866020015173ffffffffffffffffffffffffffffffffffffffff168152602001866000015173ffffffffffffffffffffffffffffffffffffffff168152602001866080015161ffff16815250610d1c565b50505050565b80518251146040518060400160405280600281526020017f343900000000000000000000000000000000000000000000000000000000000081525090610c5b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104559190612792565b5060005b8251811015610be257610cc7846000858481518110610c8057610c80612555565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611030565b80610cd1816125e2565b915050610c5f565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec7783900484111517610d0e57600080fd5b506127109102611388010490565b6000610d3982604001518360200151610cd990919063ffffffff16565b90506000818360200151610d4d91906129b5565b9050600083602001518460000151610d6591906129cc565b90506000610d72866111ba565b9050610d7e86826113d3565b6101008101516008870154610e2f91610da9916fffffffffffffffffffffffffffffffff169061145e565b826101e0015173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610df9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1d91906129e4565b610e2791906129cc565b8790856114b5565b6101008201819052610e4b90610e46908690611565565b6115a4565b600887018054600090610e719084906fffffffffffffffffffffffffffffffff166129fd565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550610ec58186606001518460008a61164a90949392919063ffffffff16565b60808501516101e08201516060870151610ef89273ffffffffffffffffffffffffffffffffffffffff909116918561198b565b6101e081015160808601516040517f6fd9767600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201819052602482015260448101859052911690636fd9767690606401600060405180830381600087803b158015610f7a57600080fd5b505af1158015610f8e573d6000803e3d6000fd5b505050508460a0015161ffff16856060015173ffffffffffffffffffffffffffffffffffffffff16866080015173ffffffffffffffffffffffffffffffffffffffff167fefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f03389600001516000600281111561100b5761100b612584565b8b602001516040516110209493929190612925565b60405180910390a4505050505050565b60408051602081019091528154808252671000000000000000161515156040518060400160405280600281526020017f3239000000000000000000000000000000000000000000000000000000000000815250906110bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104559190612792565b5080516701000000000000001615156040518060400160405280600281526020017f323700000000000000000000000000000000000000000000000000000000000081525090611138576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104559190612792565b5080516780000000000000001615156040518060400160405280600281526020017f3931000000000000000000000000000000000000000000000000000000000000815250906111b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104559190612792565b505050565b6111c2611f89565b6111ca611f89565b60408051602081018252845481526101c0830181905251901c61ffff166101a082015260018301546fffffffffffffffffffffffffffffffff808216610100840181905260e0840152600285015480821661014085018190526101208501527001000000000000000000000000000000009283900482166101608501528290041661018083015260048085015473ffffffffffffffffffffffffffffffffffffffff9081166101e085015260058601548116610200850152600686015416610220840181905260038601549290920464ffffffffff16610240840152604080517fb1bf962d000000000000000000000000000000000000000000000000000000008152905163b1bf962d928281019260209291908290030181865afa1580156112f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131b91906129e4565b816020018181525081600001818152505080610200015173ffffffffffffffffffffffffffffffffffffffff1663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa15801561137c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a09190612a31565b64ffffffffff166102608501526060840181905260808401829052604084019290925260c083015260a082015292915050565b60038201544264ffffffffff908116700100000000000000000000000000000000909204161415611402575050565b61140c8282611a6d565b6114168282611b8e565b5060030180547fffffffffffffffffffffff0000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000004264ffffffffff1602179055565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff8390048411151761149357600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6001830154600090819061150d906fffffffffffffffffffffffffffffffff166b033b2e3c9fd0803ce80000006114fd6114ee88611d0d565b6114f788611d0d565b90611565565b61150791906129cc565b9061145e565b9050611518816115a4565b6001860180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9290921691909117905590505b9392505050565b600081156b033b2e3c9fd0803ce80000006002840419048411171561158957600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b60006fffffffffffffffffffffffffffffffff821115611646576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f32382062697473000000000000000000000000000000000000000000000000006064820152608401610455565b5090565b6116756040518060800160405280600081526020016000815260200160008152602001600081525090565b61014085015160208601516116899161145e565b60608083019182526007880154604080516101208101825260088b01546fffffffffffffffffffffffffffffffff7001000000000000000000000000000000009091041681526020810188905280820187905260c0808b0151948201949094529351608085015260a0808a0151908501526101a08901519284019290925273ffffffffffffffffffffffffffffffffffffffff87811660e08501526101e0890151811661010085015291517fa589870900000000000000000000000000000000000000000000000000000000815291169163a5898709916117ea9190600401600061012082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015173ffffffffffffffffffffffffffffffffffffffff80821660e0850152610100915080828601511682850152505092915050565b606060405180830381865afa158015611807573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061182b9190612a7c565b60408401526020830152808252611841906115a4565b6001870180546fffffffffffffffffffffffffffffffff9283167001000000000000000000000000000000000292169190911790556020810151611884906115a4565b6003870180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9290921691909117905560408101516118d5906115a4565b6002870180546fffffffffffffffffffffffffffffffff92831670010000000000000000000000000000000002921691909117905580516020808301516040808501516101008a01516101408b0151835196875294860193909352908401526060830152608082015273ffffffffffffffffffffffffffffffffffffffff8516907f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a9060a00160405180910390a2505050505050565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff8581166004840152841660248301526044820183905290600080606483828a5af16119f6573d6000803e3d6000fd5b50611a0085611d28565b611a66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610455565b5050505050565b61016081015115611afd576000611a8e826101600151836102400151611df4565b9050611aa78260e001518261145e90919063ffffffff16565b6101008301819052611ab8906115a4565b6001840180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055505b805115611b8a576000611b1a826101800151836102400151611e39565b9050611b348261012001518261145e90919063ffffffff16565b6101408301819052611b45906115a4565b6002840180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055505b5050565b611bc76040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6101a0820151611bd657505050565b6101208201518251611be79161145e565b60208201526101408201518251611bfd9161145e565b60408201526060820151610260830151610240840151611c2592919064ffffffffff16611e42565b606082018190526040830151611c3a9161145e565b808252602082015160808401516040840151611c5691906129cc565b611c6091906129b5565b611c6a91906129b5565b608082018190526101a0830151611c819190610cd9565b60a08201819052156111b557611cac610e468361010001518360a0015161156590919063ffffffff16565b600884018054600090611cd29084906fffffffffffffffffffffffffffffffff166129fd565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550505050565b633b9aca008181029081048214611d2357600080fd5b919050565b6000611d68565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d8015611da75760208114611de157611da27f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611d2f565b611dee565b823b611dd857611dd87f475076323a206e6f74206120636f6e74726163740000000000000000000000006014611d2f565b60019150611dee565b3d6000803e600051151591505b50919050565b600080611e0864ffffffffff8416426129b5565b611e129085612aaa565b6301e1338090049050611e31816b033b2e3c9fd0803ce80000006129cc565b949350505050565b600061155e8383425b600080611e5664ffffffffff8516846129b5565b905080611e72576b033b2e3c9fd0803ce800000091505061155e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81016000808060028511611ea8576000611ead565b600285035b925066038882915c4000611ec18a8061145e565b81611ece57611ece612ae7565b0491506301e13380611ee0838b61145e565b81611eed57611eed612ae7565b049050600082611efd8688612aaa565b611f079190612aaa565b60029004905060008285611f1b888a612aaa565b611f259190612aaa565b611f2f9190612aaa565b60069004905080826301e13380611f468a8f612aaa565b611f509190612b16565b611f66906b033b2e3c9fd0803ce80000006129cc565b611f7091906129cc565b611f7a91906129cc565b9b9a5050505050505050505050565b604051806102800160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161200d6040518060200160405280600081525090565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561208957612089612036565b60405290565b60405160e0810167ffffffffffffffff8111828210171561208957612089612036565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120f9576120f9612036565b604052919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461212357600080fd5b50565b8035611d2381612101565b600067ffffffffffffffff82111561214b5761214b612036565b5060051b60200190565b600082601f83011261216657600080fd5b8135602061217b61217683612131565b6120b2565b82815260059290921b8401810191818101908684111561219a57600080fd5b8286015b848110156121be5780356121b181612101565b835291830191830161219e565b509695505050505050565b600082601f8301126121da57600080fd5b813560206121ea61217683612131565b82815260059290921b8401810191818101908684111561220957600080fd5b8286015b848110156121be578035835291830191830161220d565b600082601f83011261223557600080fd5b813567ffffffffffffffff81111561224f5761224f612036565b61228060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016120b2565b81815284602083860101111561229557600080fd5b816020850160208301376000918101602001919091529392505050565b803561ffff81168114611d2357600080fd5b803560ff81168114611d2357600080fd5b801515811461212357600080fd5b8035611d23816122d5565b600080600080600060a0868803121561230657600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8082111561233a57600080fd5b908701906101c0828a03121561234f57600080fd5b612357612065565b61236083612126565b815260208301358281111561237457600080fd5b6123808b828601612155565b60208301525060408301358281111561239857600080fd5b6123a48b8286016121c9565b6040830152506060830135828111156123bc57600080fd5b6123c88b8286016121c9565b6060830152506123da60808401612126565b608082015260a0830135828111156123f157600080fd5b6123fd8b828601612224565b60a08301525061240f60c084016122b2565b60c082015260e08381013590820152610100808401359082015261012080840135908201526101408084013590820152610160915061244f828401612126565b8282015261018091506124638284016122c4565b828201526101a091506124778284016122e3565b828201528093505050509295509295909350565b6000806040838503121561249e57600080fd5b82359150602083013567ffffffffffffffff808211156124bd57600080fd5b9084019060e082870312156124d157600080fd5b6124d961208f565b6124e283612126565b81526124f060208401612126565b60208201526040830135604082015260608301358281111561251157600080fd5b61251d88828601612224565b60608301525061252f608084016122b2565b608082015260a083013560a082015260c083013560c08201528093505050509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612614576126146125b3565b5060010190565b600081518084526020808501945080840160005b8381101561264b5781518752958201959082019060010161262f565b509495945050505050565b6000815180845260005b8181101561267c57602081850181015186830182015201612660565b8181111561268e576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60a0808252865190820181905260009060209060c0840190828a01845b8281101561271057815173ffffffffffffffffffffffffffffffffffffffff16845292840192908401906001016126de565b50505083810382850152612724818961261b565b9150508281036040840152612739818761261b565b905073ffffffffffffffffffffffffffffffffffffffff8516606084015282810360808401526127698185612656565b98975050505050505050565b60006020828403121561278757600080fd5b815161155e816122d5565b60208152600061155e6020830184612656565b6000602082840312156127b757600080fd5b815161155e81612101565b600381106127f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b858152602081018590526040810184905260608101839052815173ffffffffffffffffffffffffffffffffffffffff1660808201526102008101602083015173ffffffffffffffffffffffffffffffffffffffff811660a084015250604083015173ffffffffffffffffffffffffffffffffffffffff811660c084015250606083015160e08301526080830151610100612899818501836127c2565b60a085015191506101206128b28186018461ffff169052565b60c086015192506101406128c98187018515159052565b60e087015161016087810191909152928701516101808701529086015173ffffffffffffffffffffffffffffffffffffffff9081166101a08701529086015160ff166101c0860152908501519081166101e085015290506121be565b73ffffffffffffffffffffffffffffffffffffffff85168152602081018490526080810161295660408301856127c2565b82606083015295945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835286602084015285604084015280851660608401525060a060808301526129aa60a0830184612656565b979650505050505050565b6000828210156129c7576129c76125b3565b500390565b600082198211156129df576129df6125b3565b500190565b6000602082840312156129f657600080fd5b5051919050565b60006fffffffffffffffffffffffffffffffff808316818516808303821115612a2857612a286125b3565b01949350505050565b60008060008060808587031215612a4757600080fd5b845193506020850151925060408501519150606085015164ffffffffff81168114612a7157600080fd5b939692955090935050565b600080600060608486031215612a9157600080fd5b8351925060208401519150604084015190509250925092565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612ae257612ae26125b3565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082612b4c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220114b3e84e7f6d93d65fd9f68c597d16555867d36e9d3e0154e656d89caa7d35564736f6c634300080a0033";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): FlashLoanLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FlashLoanLogic;
}
export interface FlashLoanLogicLibraryAddresses {
    ["contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic"]: string;
}
export {};
//# sourceMappingURL=FlashLoanLogic__factory.d.ts.map