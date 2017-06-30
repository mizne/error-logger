const ErrorMessage = require('../models/ErrorMessage')
const logger = require('koa-log4').getLogger('ErrorMessageController')
const { ApiSuccess, ApiError } = require('../models/ApiResult')

module.exports = {
  async find(ctx, next) {
    try {
      const errorMessages = await ErrorMessage.find()
      ctx.body = new ApiSuccess(0, 'find error-message success', errorMessages)
    } catch(e) {
      const errMsg = `find error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  },

  async save(ctx, next) {
    try {
      const result = await ErrorMessage.create(ctx.request.body)
      ctx.body = new ApiSuccess(0, 'save error-message success', result)
    } catch(e) {
      const errMsg = `save error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  }
}