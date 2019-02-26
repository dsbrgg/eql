'use strict'

const {
	GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType
} = require('graphql/type')

const GreeterType = new GraphQLObjectType({
	name: 'Greeter',
	fields: {
		greeting: { type: GraphQLString }
	}
})

const GreeterInputType = new GraphQLInputObjectType({
	name: 'Greeter',
	fields: {
		greeting: { type: GraphQLString }
	}
})

module.exports = { GreeterType, GreeterInputType }