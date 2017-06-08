const app = new (require('koa'))()
const port = 8181
const logger = require('koa-log4').getLogger('app')

// 绑定中间件
const mountMiddleWares = require('./app/middlewares/index')
mountMiddleWares(app)

// 绑定路由
const mountRouters = require('./app/routes/index')
mountRouters(app)

//引入（运行）日志配置文件， 生产日志目录及相应文件
require('./log')

app.listen(port, () => {
  logger.info(`Listening on port: ${port}`)
})