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
  create_at: {
    type   : Date,
    default: Date.now,
  },
  update_at: Date,
})

const MobileAdmin = mongoose.model('MobileAdmin', MobileAdminSchema)

module.exports = MobileAdmin