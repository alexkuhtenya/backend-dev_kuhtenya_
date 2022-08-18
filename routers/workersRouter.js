const Router = require('express')
const router = new Router()
const controller = require('../controllers/workerController')
const uploadMiddleware= require('../middleware/uploadMiddleware')

router.post('/addWorker' ,uploadMiddleware.single('image'),controller.addWorker)
router.get('/getWorker', controller.getWorkers)


module.exports = router