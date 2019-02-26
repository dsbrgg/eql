'use strict'

const {
  GraphQLString,
  GraphQLNonNull,
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
	name: 'GreeterInput',
	fields: {
		greeting: { type: GraphQLNonNull(GraphQLString) }
	}
})

const GreeterEventType = new GraphQLObjectType({
	name: 'GreeterEvent',
	fields: {
		greet: { type: GraphQLString }
	}
})

module.exports = { GreeterType, GreeterInputType, GreeterEventType }