'use strict'

const {
  GraphQLString,
  GraphQLBoolean,
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

const GreeterInputSuccessType = new GraphQLObjectType({
	name: 'GreeterInputSuccess',
	fields: {
		ok: { type: GraphQLBoolean }
	}
})

const GreeterEventType = new GraphQLObjectType({
	name: 'GreeterEvent',
	fields: {
		greet: { type: GraphQLString }
	}
})

module.exports = { 
  GreeterType, 
  GreeterInputType, 
  GreeterInputSuccessType, 
  GreeterEventType
}