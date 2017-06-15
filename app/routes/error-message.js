const router = new (require('koa-router'))()
const ErrorMessage = require('../controllers/ErrorMessageController')

router.get('/api/v1/error-message', ErrorMessage.find)

router.post('/api/v1/error-message', ErrorMessage.save)

router.get('/api/v1/ip', async (ctx, next) => {
	const req = ctx.request


  ctx.body = {
    forward: req.header['x-forwarded-for'],
    remoteAddress: ctx.req.connection.RemoteAddress,
    realIp: req.header['x-real-ip']
  }
})

module.exports = router