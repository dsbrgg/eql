'use strict'

const Web3 = require('web3')

const web3 = new Web3('ws://localhost:8546')
web3.setProvider('ws://localhost:8546')

;(async function() {
  const ola = await Greeter.methods.greet().call()

  console.log(ola)
})()