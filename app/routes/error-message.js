const router = new (require('koa-router'))()
const ErrorMessage = require('../controllers/ErrorMessageController')

router.get('/api/v1/error-message', ErrorMessage.find)

router.post('/api/v1/error-message', ErrorMessage.save)

module.exports = router