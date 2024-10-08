// Deploy factory, token a and token b in that order to get the same addresses
const dotenv = require('dotenv')
dotenv.config()
const { ethers, JsonRpcProvider } = require('ethers')

const factory_json = require('../artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json')

const provider = new JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/0PISwk2ZJQ4XJt4-OHdq5ACx_jmnGzxX')

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
const factory = new ethers.Contract('0xF6E9ff447C8E7bb2098eb558557C34B483ec928E', factory_json.abi, wallet)

const tokenA = '0x574084E6A21cD334277B79f35F98C0Aae24E0030'
const tokenB = '0x945d9Eb083b477472870B2D1a3FAbaFc7ad70F00'

const createPool = async () => {
  const pool = await factory.createPool(tokenA, tokenB, 3000)
  console.log(pool)
}

const getPool = async () => {
  const pool = await factory.getPool(tokenA, tokenB, 3000)
  console.log(pool)
}

// createPool()
getPool()