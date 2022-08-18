const Router = require('express')
const router = new Router()
const controller = require('../controllers/workerController')


router.post('/addWorker' ,controller.addWorker)
router.get('/getWorker', controller.getWorkers)


module.exports = router