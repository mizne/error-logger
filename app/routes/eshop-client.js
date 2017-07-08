const router = new (require('koa-router'))()
const EShopClient = require('../controllers/EShopClientController')

router.get('/api/v1/eshop-client/error-message', EShopClient.find)

router.post('/api/v1/eshop-client/error-message', EShopClient.save)

router.delete('/api/v1/eshop-client/error-message', EShopClient.remove)

module.exports = router