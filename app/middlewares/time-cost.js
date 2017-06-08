const logger = require('koa-log4').getLogger('time-cost')

module.exports = function (options) {
  return async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start

    logger.debug(`${ctx.method} ${ctx.url} - ${ms}ms`)
  }
}