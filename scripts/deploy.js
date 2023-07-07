//hardhat is importing ethers for us
const {ethers, run, network} = require("hardhat"); //run allows us to run any hardhat package, we are importing network*defined in hardhat.config file to get any network information


async function main(){
    const SimpleStorageFactory  = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.deployed(); 
    console.log(`Deployed contract to: ${simpleStorage.address}`);


    //no need to put rpc_url or private key if we use hardhat default network
    //npx hardhat run scripts/deploy.js  //for contract deployment

    //we are checking with chain id if its sepolia network to verify contract
    if(network.config.chainId ===11155111 && process.env.ETHERSCAN_API_KEY){
      console.log("Waiting for block confirmations...")
      await simpleStorage.deployTransaction.wait(6); //cekamo 6 blokova da prodje da bi overili ugovor
      await verify(simpleStorage.adress,[])// we are programmaticaly verifing contract using hardhat-etherscan package //mora da se napravi nalog na etherscan da se dobije njihov kjuc
    }


    const currentValue = await simpleStorage.retrieve();
    console.log(`Current Value is :${currentValue}`);

    //Update the current value

    const transactionResponse = await simpleStorage.store(7);
    await  transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    console.log(`Updated Value is: ${updatedValue}`);

    //async function verify(contractAddress, args){} //this is same like beneath
    const verify = async (contractAddress, args) => {
      console.log("Verifiying contract...");
      try {
        await run("verify:verify", {
          address: contractAddress,
          constructorArguments: args,
        })
      } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
          console.log("Already Verified!")
        } else {
          console.log(e)
        }
      }
    }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })