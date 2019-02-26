'use strict'

module.exports = async (ctx, next) => {
  ctx.from = '0x40aF1756e5320444494676AB9d9C11f4942D79C1'
  await next()
}