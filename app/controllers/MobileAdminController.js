const MobileAdmin = require('../models/MobileAdmin')
const Module = require('../models/Module')
const logger = require('koa-log4').getLogger('MobileAdminController')
const { ApiSuccess, ApiError } = require('../models/ApiResult')

const optionKeys = ['skip', 'limit', 'sortField', 'sortOrder']

module.exports = {
  async find(ctx, next) {
    try {
      const condition = Object.keys(ctx.query)
      .filter(e => !optionKeys.includes(e))
      .reduce((accu, curr) => {
        if (accu[curr]) {
          accu[curr] = [accu[curr], ctx.query[curr]]
        } else {
          accu[curr] = ctx.query[curr]
        }
        return accu
      }, {})

      console.log(condition)

      let option = {
        skip: Number(ctx.query.skip),
        limit: Number(ctx.query.limit)
      }

      if (ctx.query.sortField) {
        Object.assign(option, {
          sort: {
            [ctx.query.sortField]: ctx.query.sortOrder === 'ascend' ? 1 : -1
          }
        })
      } else {
        Object.assign(option, {
          sort: {
            createdAt: -1
          }
        })
      }

      console.log(option)


      const count = await MobileAdmin.count(condition)
      console.log(count)

      const sort = ctx.query.sortField ? {
        [ctx.query.sortField]: ctx.query.sortOrder === 'ascend' ? 1 : -1
      } : {
        createdAt: -1
      }

      const errorMessages = await MobileAdmin.find(condition).skip(Number(ctx.query.skip)).limit(Number(ctx.query.limit)).sort(sort)

      ctx.body = new ApiSuccess(0, 'find mobile-admin error-message success', {
        total: count,
        items: errorMessages
      })
    } catch(e) {
      const errMsg = `find mobile-admin error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  },

  async remove(ctx, next) {
    const condition = Object.keys(ctx.query)
      .reduce((accu, curr) => {
        if (accu[curr]) {
          accu[curr] = [accu[curr], ctx.query[curr]]
        } else {
          accu[curr] = ctx.query[curr]
        }
        return accu
      }, {})

    const result = await MobileAdmin.remove(condition)

    ctx.body = new ApiSuccess(0, 'remove mobile-admin error-message success', result)
  },

  async save(ctx, next) {
    try {
      const saveMsgResult = await MobileAdmin.create(ctx.request.body)

      const condition = {
        appName: 'mobileAdmin',
        name: ctx.request.body.module
      }

      const saveModuleResult = await Module.saveIfNotExisit(condition)

      ctx.body = new ApiSuccess(0, 'save mobile-admin error-message success', {
        saveMsgResult,
        saveModuleResult
      })
    } catch(e) {
      const errMsg = `save mobile-admin error-message failed; error: ${e.message}`
      logger.error(errMsg)
      ctx.body = new ApiError(10000, errMsg)
    }
  }
}