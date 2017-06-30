const DealClient = require('../models/DealClient')
const logger = require('koa-log4').getLogger('DealClientController')
const { ApiSuccess, ApiError } = require('../models/ApiResult')

module.exports = {
  async find(ctx, next) {
    try {
      const errorMessages = await DealClient.find()
      ctx.body = new ApiSuccess(0, 'find deal-client error-message success', errorMessages)
    } catch(e) {
      const errMsg = `find deal-client error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  },

  async save(ctx, next) {
    try {
      const result = await DealClient.create(ctx.request.body)
      ctx.body = new ApiSuccess(0, 'save deal-client error-message success', result)
    } catch(e) {
      const errMsg = `save deal-client error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  }
}