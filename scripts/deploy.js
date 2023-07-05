//hardhat is importing ethers for us
const {ethers} = require("hardhat");


async function main(){
    const SimpleStoragaFactory  = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStoragaFactory.deploy();
    await simpleStorage.deployed(); //to wait to contract gets 

    //no need to put rpc_url or private key if we use hardhat default network
    //npx hardhat run scripts/deploy.js  //for contract deployment
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })