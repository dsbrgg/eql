const Web3 = require('web3')

const web3 = new Web3('ws://localhost:8546')
web3.setProvider('ws://localhost:8546')

web3.eth.getAccounts().then(console.log)