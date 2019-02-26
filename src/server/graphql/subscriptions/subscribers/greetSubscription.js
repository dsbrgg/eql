'use strict'

const { NEW_GREETING } = require('../../types/subscriptions')

const greetSubscription = async (_, args, { pb }) => pb.asyncIterator(NEW_GREETING)

module.exports = { greetSubscription }