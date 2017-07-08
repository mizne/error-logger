const router = new (require('koa-router'))()
const Module = require('../controllers/ModuleController')

router.get('/api/v1/module', Module.find)

module.exports = router