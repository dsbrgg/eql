'use strict'

const { GraphQLObjectType } = require('graphql/type')

const { GreeterEventType } = require('../types')
const { checkGreeting } = require('./resolvers')
const { greetSubscription } = require('./subscribers')

const GreeterGraphQLSubscription = new GraphQLObjectType({
	name: 'SubscriptionGreeter',
	fields: {
		recentGreeting: {
			type: GreeterEventType,
      resolve: checkGreeting,
      subscribe: greetSubscription
		}
	}
})

module.exports = { GreeterGraphQLSubscription }