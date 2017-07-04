const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EShopClientSchema = new Schema({
  tenantId: {
    type: String,
    required: true
  },
  consigneeId: {
    type: String,
    required: true
  },
  tableName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  module : {
    type: String,
    required: true
  },
  method : String,
  description: String,
  createdAt: {
    type   : Date,
    default: Date.now,
  },
  updatedAt: Date,
})

const EShopClient = mongoose.model('EShopClient', EShopClientSchema)

module.exports = EShopClient