'use strict'

const Router = require('koa-router')
const graphqlHTTP = require('koa-graphql')

const { schema } = require('../graphql')

const router = Router()
router.all('/api/graphql', graphqlHTTP({
  schema,
  graphiql: true,
	// https://github.com/graphql/express-graphql/issues/427
	// https://github.com/apollographql/graphql-tools/issues/480
	formatError: (err) => err.originalError
		? err.originalError.errors[0].originalError
		: err
}))

module.exports = router