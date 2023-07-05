/** @type import('hardhat/config').HardhatUserConfig */

require ("dotenv").config(); // moras da instaliras i u teminalu
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork:"hardhat",
  networks :{
   
  },
  solidity: "0.8.18",
};


const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL  || "https://eth-sepolia.g.alchemy.com/v2/NATVtHRPAIFJJlvNoFLFl63Qhbcgj--k" ;
const PRIVATE_KEY = process.env.PRIVATE_KEY || "71da49c3f3d99326e613f3102ae8c8efd4974ae02fae58dc98466e0eab81931c"

module.exports = {
  solidity : "0.8.8",

  defaultNetwork: "hardhat",

  networks : {
    hardhat: {},
    sepolia: {
      url : SEPOLIA_RPC_URL,
      accounts : [PRIVATE_KEY],
      chainId: 11155111   
    }
  }
}