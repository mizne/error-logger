const Module = require('../models/Module')
const logger = require('koa-log4').getLogger('ModuleController')
const { ApiSuccess, ApiError } = require('../models/ApiResult')


module.exports = {
    async find(ctx, next) {
        try {
            const condition = {
              appName: ctx.query.appName
            }
            const modules = await Module.find(condition)

            ctx.body = new ApiSuccess(0, 'find modules success', modules)
        } catch (e) {
            const errMsg = `find modules failed; error: ${e.message}`
            logger.error(errMsg)
            ctx.body = new ApiError(10000, errMsg)
        }
    },
}
