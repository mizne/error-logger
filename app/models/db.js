const mongoose = require('mongoose')
const Promise = require('bluebird')
global.Promise = mongoose.Promise = Promise
Promise.promisifyAll(mongoose)
const logger = require('koa-log4').getLogger('db')

// 连接MongoDB, 在生产环境应该禁用autoIndex，因为会造成性能问题
const connString = 'mongodb://localhost:27017/error-logger'
mongoose.connect(connString, { /*config: { autoIndex: false }*/ })

// MongoDB连接成功后回调，这里仅输出一行日志
mongoose.connection.on('connected', function () {
    logger.info('Mongoose default connection open to ' + connString)
})

// MongoDB连接出错后回调，这里仅输出一行日志
mongoose.connection.on('error',function (err) {
    logger.error('Mongoose default connection error: ' + err)
})

// MongoDB连接断开后回调，这里仅输出一行日志
mongoose.connection.on('disconnected', function () {
    logger.info('Mongoose default connection disconnected')
})

// 当前进程退出之前关闭MongoDB连接
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        logger.info('Mongoose default connection closed through app termination')
        process.exit(0)
    })
})