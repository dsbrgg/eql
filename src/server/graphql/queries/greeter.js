'use strict'

const { GraphQLObjectType } = require('graphql/type')

const { GreeterType } = require('../types')
const { greet } = require('./resolvers')

const GreeterGraphQLQuery = new GraphQLObjectType({
	name: 'QueryGreeter',
	fields: {
		greet: {
			type: GreeterType,
			resolve: greet
		}
	}
})

module.exports = { GreeterGraphQLQuery }