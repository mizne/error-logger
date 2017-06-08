const fs = require('fs')

module.exports = function (app) {
  try {
    fs.readdirSync(__dirname)
      .filter(filename => filename !== 'index.js')
      .map(filename => require(`./${filename}`))
      .forEach(router => {
        app.use(router.routes(), router.allowedMethods())
      })
  } catch (e) {
    app.emit('error', e)
  }
}