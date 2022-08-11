const Router = require('express')
const router = new Router()
const controller = require('../controllers/workerController')

router.post('/addWorker' , controller.addWorker)
// router.put('/editWorker', controller.editWorker)
router.get('/getWorker', controller.getWorkers)

module.exports = router