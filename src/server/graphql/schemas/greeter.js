'use strict'

const { GraphQLSchema } = require('graphql/type')

const { GreeterGraphQLQuery } = require('../queries')
const { GreeterGraphQLMutation } = require('../mutations')
const { GreeterGraphQLSubscription } = require('../subscriptions')

const GreeterGraphQLSchema = new GraphQLSchema({
  query: GreeterGraphQLQuery,
  mutation: GreeterGraphQLMutation,
  subscription: GreeterGraphQLSubscription
})

module.exports = { GreeterGraphQLSchema }