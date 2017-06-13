const router = new (require('koa-router'))()

router.get('/api/v1/user', async (ctx, next) => {
  ctx.body = {everything: 42}
})

module.exports = router