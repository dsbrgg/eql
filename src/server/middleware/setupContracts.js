'use strict'

const contracts = require('../../../address.json')

module.exports = (web3) => {
  const { address, abi } = contracts['Greeter']
  const Greeter = new web3.eth.Contract(abi, address)

  return async function(ctx, next) {
		ctx.contracts = { Greeter }
		await next()
	}
}