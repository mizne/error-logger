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
  const module = await Module.findOne(condition)
  if (module) {
    return `module: ${module.name} is exisit`  
  }
  const result = await Module.create(condition)
  return result
}

const Module = mongoose.model('Module', ModuleSchema)

module.exports = Module