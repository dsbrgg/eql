'use strict'

const { GraphQLObjectType } = require('graphql/type')

const { GreeterEventType } = require('../types')
const { checkGreeting } = require('./resolvers')
const { newGreeting } = require('./subscribers')

const GreeterGraphQLSubscription = new GraphQLObjectType({
	name: 'SubscriptionGreeter',
	fields: {
		newGreeting: {
			type: GreeterEventType,
      resolve: checkGreeting,
      subscribe: newGreeting
		}
	}
})

module.exports = { GreeterGraphQLSubscription }