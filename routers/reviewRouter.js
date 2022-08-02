const Router = require('express')
const router = new Router()
const controller = require('../controllers/reviewController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/addreview' ,authMiddleware, controller.addReview)

module.exports = router