'use strict'

const Koa = require('koa')
const Web3 = require('web3')

const web3 = new Web3('ws://localhost:8546')
web3.setProvider('ws://localhost:8546')

const { setupContracts } = require('./middleware')

const app = new Koa()

app.use(setupContracts(web3))

app.listen(8080, () => {
  console.info('Listening on port 8080')
})