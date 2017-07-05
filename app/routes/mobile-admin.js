const router = new (require('koa-router'))()
const MobileAdmin = require('../controllers/MobileAdminController')

router.get('/api/v1/mobile-admin/error-message', MobileAdmin.find)

router.post('/api/v1/mobile-admin/error-message', MobileAdmin.save)

router.delete('/api/v1/mobile-admin/error-message', MobileAdmin.remove)

module.exports = router