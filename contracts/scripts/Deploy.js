const { Contract, ContractFactory, utils, BigNumber } = require("ethers")
// const WETH9 = require("../WETH9.json")

const artifacts = {

//   SwapRouter: require("@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json"),
//   NFTDescriptor: require("@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json"),
//   NonfungibleTokenPositionDescriptor: require("@uniswap/v3-periphery/artifacts/contracts/NonfungibleTokenPositionDescriptor.sol/NonfungibleTokenPositionDescriptor.json"),
//   NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
//   WETH9,


  // UniswapV3Factory: require("../artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
  // SwapRouter: require("../artifacts/contracts/")
};



async function main() {
  const [owner] = await ethers.getSigners();

  // --------------------------



  const SwapRouter = await ethers.getContractFactory("SwapRouter");
  const swapRouter = await SwapRouter.deploy("0xc6e7DF5E7b4f2A278906862b61205850344D4e7d","0x59b670e9fA9D0A427751Af201D676719a970857b");
  console.log("SwapRouterAddress", swapRouter.address);



  // ----------------------------------




}


/*
npx hardhat run --network localhost scripts/01_deployContracts.js
*/

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });