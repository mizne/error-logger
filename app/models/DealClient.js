const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DealClientSchema = new Schema({
  tenantId: {
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

const DealClient = mongoose.model('DealClient', DealClientSchema)

module.exports = DealClient