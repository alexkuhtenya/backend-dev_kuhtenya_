const Router = require('express')
const router = new Router()
const controller = require('../controllers/workerController')
const uploadMiddleware= require('../middleware/uploadMiddleware')

router.post('/addWorker' ,uploadMiddleware.single('recfile'),controller.addWorker)
router.post('/addImage', controller.imageForWorker)
router.get('/getWorker', controller.getWorkers)
router.get('/Worker', controller.Worker)

module.exports = router