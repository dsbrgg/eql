'use strict'

const Koa = require('koa')
const Web3 = require('web3')
const { createServer } = require('http')

const web3 = new Web3('ws://localhost:8546')
web3.setProvider('ws://localhost:8546')

const { router, wsRouter } = require('./router')
const { fromAddress, setupContracts, pubSub } = require('./middleware')

const app = new Koa()

app.use(pubSub)
app.use(fromAddress)
app.use(setupContracts(web3))
app.use(router.routes())
app.use(router.allowedMethods())

const server = createServer(app.callback())

server.listen(8080, () => {
  wsRouter(server)
  console.log('Listening on port 8080')
})