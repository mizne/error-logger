const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ErrorMessageSchema = new Schema({
  appName: {
    type: String,
    required: true
  },
  tenantId: {
    type: String,
    required: true
  },
  loginName: {
    type: String,
    required: true
  },
  module : {
    type: String,
    required: true
  },
  level: {
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

const ErrorMessage = mongoose.model('ErrorMessage', ErrorMessageSchema)

module.exports = ErrorMessage