const EShopClient = require('../models/EShopClient')
const logger = require('koa-log4').getLogger('EShopClientController')
const { ApiSuccess, ApiError } = require('../models/ApiResult')

module.exports = {
  async find(ctx, next) {
    try {
      const errorMessages = await EShopClient.find()
      ctx.body = new ApiSuccess(0, 'find eshop-client error-message success', errorMessages)
    } catch(e) {
      const errMsg = `find eshop-client error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  },

  async save(ctx, next) {
    try {
      const result = await EShopClient.create(ctx.request.body)
      ctx.body = new ApiSuccess(0, 'save eshop-client error-message success', result)
    } catch(e) {
      const errMsg = `save eshop-client error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  }
}