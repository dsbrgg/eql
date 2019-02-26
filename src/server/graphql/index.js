'use strict'

const { 
  GreeterGraphQLSchema, 
  GreeterGraphQLSubscriptionSchema 
} = require('./schemas')

module.exports = { 
  schema: GreeterGraphQLSchema,
  subscriptions: GreeterGraphQLSubscriptionSchema
}