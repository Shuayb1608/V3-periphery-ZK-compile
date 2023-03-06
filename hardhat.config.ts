// import '@nomiclabs/hardhat-ethers'
// import '@nomiclabs/hardhat-etherscan'
// import '@nomiclabs/hardhat-waffle'
// import 'hardhat-typechain'
// import 'hardhat-watcher'

// const LOW_OPTIMIZER_COMPILER_SETTINGS = {
//   version: '0.7.6',
//   settings: {
//     evmVersion: 'istanbul',
//     optimizer: {
//       enabled: true,
//       runs: 2_000,
//     },
//     metadata: {
//       bytecodeHash: 'none',
//     },
//   },
// }

// const LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
//   version: '0.7.6',
//   settings: {
//     evmVersion: 'istanbul',
//     optimizer: {
//       enabled: true,
//       runs: 1_000,
//     },
//     metadata: {
//       bytecodeHash: 'none',
//     },
//   },
// }

// const DEFAULT_COMPILER_SETTINGS = {
//   version: '0.7.6',
//   settings: {
//     evmVersion: 'istanbul',
//     optimizer: {
//       enabled: true,
//       runs: 1_000_000,
//     },
//     metadata: {
//       bytecodeHash: 'none',
//     },
//   },
// }

// export default {
//   networks: {
//     hardhat: {
//       allowUnlimitedContractSize: false,
//     },
//     mainnet: {
//       url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     ropsten: {
//       url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     rinkeby: {
//       url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     goerli: {
//       url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     kovan: {
//       url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     arbitrumRinkeby: {
//       url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     arbitrum: {
//       url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     optimismKovan: {
//       url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//     optimism: {
//       url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
//     },
//   },
//   etherscan: {
//     // Your API key for Etherscan
//     // Obtain one at https://etherscan.io/
//     apiKey: process.env.ETHERSCAN_API_KEY,
//   },
//   solidity: {
// compilers: [DEFAULT_COMPILER_SETTINGS],
//     overrides: {
//       'contracts/NonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
//       'contracts/test/MockTimeNonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
//       'contracts/test/NFTDescriptorTest.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
//       'contracts/NonfungibleTokenPositionDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
//       'contracts/libraries/NFTDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
//     },
//   },
//   watcher: {
//     test: {
//       tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
//       files: ['./test/**/*'],
//       verbose: true,
//     },
//   },
// }



require( "@nomiclabs/hardhat-waffle");
require( '@matterlabs/hardhat-zksync-deploy');
require( '@matterlabs/hardhat-zksync-solc');

const ALCHEMY_API_KEY = "3mQyQQlouZSpP9urDglk3M9XLmlgoxmp";
const GOERLI_API_KEY = "I5AsJB8XX-iWDL0WmdODLAtjNSSvfi_x";
const MUMBAI_PRIVATE_KEY = "0xadf787d3490ae2a37e70df7fc654be598cd91d6f2932f68bc62c99b2e88bb376";

module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
        details: { yul: true },
      },
    }
  },

  zksolc: {
    version: "1.3.1",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkSyncTestnet",

  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [MUMBAI_PRIVATE_KEY]
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${GOERLI_API_KEY}`,
      accounts: [MUMBAI_PRIVATE_KEY]
    },
    zkSyncTestnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
    hardhat: {
      zksync: true
    }
  },
};



