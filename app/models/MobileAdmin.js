const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MobileAdminSchema = new Schema({
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
  devicePlatform: String,
  deviceVersion: String,
  deviceUUID: String,
  createdAt: {
    type   : Date,
    default: Date.now,
  },
  updatedAt: Date,
})

const MobileAdmin = mongoose.model('MobileAdmin', MobileAdminSchema)

module.exports = MobileAdmin