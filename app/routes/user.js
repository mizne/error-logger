const router = new (require('koa-router'))()

router.get('/', async (ctx, next) => {
  ctx.body = {everything: 42}
})

module.exports = router