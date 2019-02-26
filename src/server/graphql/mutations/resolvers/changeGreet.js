'use strict'

const changeGreet = async (_, { input: { greeting } }, { from, contracts: { Greeter } }) => {
	try {
    await Greeter.methods.changeGreet(greeting).send({ from, gasPrice: 0 })
  } catch (err) {
    throw err
  }
  
  return {
    greeting: await Greeter.methods.greet().call()
  }
}

module.exports = { changeGreet }