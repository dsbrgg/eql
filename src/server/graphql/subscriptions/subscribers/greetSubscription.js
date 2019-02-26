'use strict'

const { NEW_GREETING } = require('../../types/subscriptions')

const newGreeting = async (_, args, { pb }) => pb.asyncIterator(NEW_GREETING)

module.exports = { newGreeting }