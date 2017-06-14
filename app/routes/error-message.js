const router = new (require('koa-router'))()
const ErrorMessage = require('../controllers/ErrorMessageController')

router.get('/api/v1/error-message', ErrorMessage.find)

router.post('/api/v1/error-message', ErrorMessage.save)

router.get('/api/v1/ip', async (ctx, next) => {
  console.log(ctx.request.ip)

  ctx.body = {
    ip: ctx.request.ip
  }
})

module.exports = router