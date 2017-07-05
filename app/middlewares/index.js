const convert = require('koa-convert')
const koaBody = require('koa-body')
const cors = require('koa-cors')
const static = require('koa-static')

const log4js = require('koa-log4')
const logger = log4js.getLogger('app')

const timeCost = require('./time-cost')
const path = require('path')

module.exports = function(app) {
  app.use(async(ctx, next) => {
    try {
      await next()
    } catch (err) {
      if (err.status === 401) {
        ctx.status = 401
        ctx.body = 'Protected resource, use Authorization header to get access; Format is "Authorization: Bearer <token>"\n'
      } else {
        ctx.status = err.status || 500
        ctx.body = 'Server Internal Error!'
        ctx.app.emit('error', err, ctx)
      }
    }
  })

  app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))

  app.use(koaBody())
  app.use(convert(cors()))

  // app.use(timeCost())

  app.use(static(path.join(__dirname, '..', 'public/images')))

  // errorHandler
  app.on('error', function(err, ctx) {
    logger.error('server error', err, ctx)
  })
}