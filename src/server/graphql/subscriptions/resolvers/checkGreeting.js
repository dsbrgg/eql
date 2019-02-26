'use strict'

const checkGreeting = async (payload, args, context, info) => {
  console.log('entrou no subscription', context)
	// console.log({
  //   payload, args, context, info
  // })
}

module.exports = {
  checkGreeting
}