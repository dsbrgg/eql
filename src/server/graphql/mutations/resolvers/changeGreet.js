'use strict'

const { NEW_GREETING } = require('../../types/subscriptions')

const changeGreet = async (_, { input: { greeting } }, { pb, from, contracts: { Greeter } }) => {
	try {
    await Greeter.methods.changeGreet(greeting).send({ from, gasPrice: 0 })
  } catch (err) {
    throw err
  }
  
  pb.publish(NEW_GREETING, {
    greet: await Greeter.methods.greet().call()
  })
}

module.exports = { changeGreet }