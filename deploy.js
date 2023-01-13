// deploy code will go here
const HDWalletProvider=require('@truffle/hdwallet-provider');
const Web3=require('web3');
const {interface,bytecode}=require('./compile');

const provider=new HDWalletProvider(
    'roof chunk habit drip patch pond matter quote helmet merry fetch battle',
    'https://goerli.infura.io/v3/3d3e773ea0c44b82a7c409ba7ce2f505'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
