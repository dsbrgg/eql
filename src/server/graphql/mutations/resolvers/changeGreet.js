'use strict'

const { NEW_GREETING } = require('../../types/subscriptions')

const changeGreet = async ({ from, pubsub }, { input: { greeting } }, { contracts: { Greeter } }) => {  
  try {
    const tx = await Greeter.methods.changeGreet(greeting).send({ from, gasPrice: 0 })
    const { greet } = tx.events.NewGreeting.returnValues

    pubsub.publish(NEW_GREETING, { greet })

    return { ok: true }
  } catch (err) {
    throw err
  }
}

module.exports = { changeGreet }