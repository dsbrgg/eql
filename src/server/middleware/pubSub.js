'use strict'

const { PubSub } = require('graphql-subscriptions')

module.exports = async (ctx, next) => {
  ctx.pb = new PubSub()
  await next()
}