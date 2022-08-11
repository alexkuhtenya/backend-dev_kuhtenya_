const Router = require('express')
const router = new Router()
const controller = require('../controllers/workerController')

router.post('/addWorker' , controller.addWorker)
// router.put('/editWorker', controller.editWorker)


module.exports = router