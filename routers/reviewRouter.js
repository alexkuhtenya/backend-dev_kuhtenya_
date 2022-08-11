const Router = require('express')
const router = new Router()
const controller = require('../controllers/reviewController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/addreview' , controller.addReview)

router.patch('/addReply' , controller.addReply)

router.get('/review', controller.getReview)

module.exports = router