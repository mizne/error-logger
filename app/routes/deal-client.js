const router = new (require('koa-router'))()
const DealClient = require('../controllers/DealClientController')

router.get('/api/v1/deal-client/error-message', DealClient.find)

router.post('/api/v1/deal-client/error-message', DealClient.save)

module.exports = router