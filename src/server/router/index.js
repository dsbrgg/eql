'use strict'

const Router = require('koa-router')
const graphqlHTTP = require('koa-graphql')

const { execute, subscribe } = require('graphql')
const { PubSub } = require('graphql-subscriptions')
const { SubscriptionServer } = require('subscriptions-transport-ws')

const { schema } = require('../graphql')

const router = Router()

const rootValue = {
  pubsub: new PubSub(),
  from: '0x40aF1756e5320444494676AB9d9C11f4942D79C1'
}

const wsRouter = (server) => SubscriptionServer.create({
  execute, subscribe, schema, rootValue
}, {
  server, path: '/subscriptions'
})

router.all('/api/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue,
	// https://github.com/graphql/express-graphql/issues/427
	// https://github.com/apollographql/graphql-tools/issues/480
	formatError: (err) => err.originalError
		? err.originalError.errors[0].originalError
		: err
}))

module.exports = { router, wsRouter }