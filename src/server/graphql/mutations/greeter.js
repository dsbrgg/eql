'use strict'

const { GraphQLObjectType } = require('graphql/type')

const { changeGreet } = require('./resolvers')
const { GreeterInputType, GreeterInputSuccessType } = require('../types')

const GreeterGraphQLMutation = new GraphQLObjectType({
	name: 'MutateGreeter',
	fields:  {
		changeGreet: {
			type: GreeterInputSuccessType,
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