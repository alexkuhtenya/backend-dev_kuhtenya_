const Router = require('express')
const router = new Router()
const controller = require('../controllers/actionsController')



router.get('/actions', controller.getActions)

router.post('/actions', controller.addActions)

module.exports = router