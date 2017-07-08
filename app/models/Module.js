const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModuleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  appName: {
    type: String,
    required: true
  },
  createdAt: {
    type   : Date,
    default: Date.now,
  },
  updatedAt: Date,
})

ModuleSchema.statics.saveIfNotExisit = async function (condition) {
  const item = await Module.findOne(condition)
  if (item) {
    return 'item is exisit'
  }
  const result = await Module.create(condition)
  return result
}

const Module = mongoose.model('Module', ModuleSchema)

module.exports = Module