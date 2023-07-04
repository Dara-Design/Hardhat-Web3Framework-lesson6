https://hardhat.org/  Ethereum development environment for professionals
 HARDHAT installation:


npm init | 
npm add --dev hardhat |
npx hardhat  |
npx hardhat compile // to compile --> we get artifacts and cache folder 

artifacts folder containts all the information about our compiled code



HardHat Network -it has it's own built in network, which means whenever we run a script/task in Hardhat, and do not specify a network we deploy to fake HardHat network, and we DO NOT NEED TO DEFINE RPC_URL AND A PRIVATE KEY -this is one of the major advantages of working with Hardhat

-IN ANY SCRIPT WE RUN WE CAN EXPLICITLY CHOOSE NETWORK:
npm hardhat run scripts/deploy.js --network hardhat
-we can shift beetween networks