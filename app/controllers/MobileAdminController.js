const MobileAdmin = require('../models/MobileAdmin')
const logger = require('koa-log4').getLogger('MobileAdminController')
const { ApiSuccess, ApiError } = require('../models/ApiResult')

module.exports = {
  async find(ctx, next) {
    try {
      const errorMessages = await MobileAdmin.find()
      ctx.body = new ApiSuccess(0, 'find mobile-admin error-message success', errorMessages)
    } catch(e) {
      const errMsg = `find mobile-admin error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  },

  async save(ctx, next) {
    try {
      const result = await MobileAdmin.create(ctx.request.body)
      ctx.body = new ApiSuccess(0, 'save mobile-admin error-message success', result)
    } catch(e) {
      const errMsg = `save mobile-admin error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  }
}