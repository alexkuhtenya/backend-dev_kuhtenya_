const Router = require('express')
const router = new Router()
const controller = require('../controllers/reviewController')

router.post('/addreview' , controller.addReview)

router.patch('/addReply' , controller.addReply)

router.get('/review', controller.getReview)

router.get('/isReview', controller.getIsReview)

router.delete('/delReview', controller.delReview)

module.exports = router