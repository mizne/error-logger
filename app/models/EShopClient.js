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
  create_at: {
    type   : Date,
    default: Date.now,
  },
  update_at: Date,
})

const EShopClient = mongoose.model('EShopClient', EShopClientSchema)

module.exports = EShopClient