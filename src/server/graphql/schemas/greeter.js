'use strict'

const { GraphQLSchema } = require('graphql/type')

const { GreeterGraphQLQuery } = require('../queries')

const GreeterGraphQLSchema = new GraphQLSchema({
	query: GreeterGraphQLQuery
})

module.exports = { GreeterGraphQLSchema }