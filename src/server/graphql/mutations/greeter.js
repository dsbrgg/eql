'use strict'

const { GraphQLObjectType } = require('graphql/type')

const { changeGreet } = require('./resolvers')
const { GreeterType, GreeterInputType } = require('../types')

const GreeterGraphQLMutation = new GraphQLObjectType({
	name: 'MutateGreeter',
	fields:  {
		changeGreet: {
			type: GreeterType,
			args: {
				input: {
					type: GreeterInputType
				}
			},
			resolve: changeGreet
		}
	}
})

module.exports = { GreeterGraphQLMutation }