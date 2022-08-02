const Router = require('express')
const router = new Router()
const controller = require('../controllers/actionsController')

router.post('/actions' , controller.addActions)

router.put('/change', controller.editActions)

module.exports = router