const Router = require('express')
const router = new Router()
const controller = require('../controllers/workerController')


router.post('/addWorker' ,controller.addWorker)
router.patch('/editWorker', controller.editWorkers)
router.delete('/delWorker', controller.delWorker)
router.get('/getWorker', controller.getWorkers)


module.exports = router