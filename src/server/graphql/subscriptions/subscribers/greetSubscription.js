'use strict'

const { NEW_GREETING } = require('../../types/subscriptions')

const newGreeting = async ({ pubsub }, args, ctx, operation) => pubsub.asyncIterator(NEW_GREETING)

module.exports = { newGreeting }