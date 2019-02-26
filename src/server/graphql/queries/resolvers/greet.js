'use strict'

const greet = async (_, args, { contracts: { Greeter } }) => {
	return {
    greeting: await Greeter.methods.call()
  }
}

module.exports = {
	greet
}