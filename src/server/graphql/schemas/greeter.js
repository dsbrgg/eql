'use strict'

const { GraphQLSchema } = require('graphql/type')

const { GreeterGraphQLQuery } = require('../queries')
const { GreeterGraphQLMutation } = require('../mutations')

const GreeterGraphQLSchema = new GraphQLSchema({
  query: GreeterGraphQLQuery,
  mutation: GreeterGraphQLMutation
})

module.exports = { GreeterGraphQLSchema }