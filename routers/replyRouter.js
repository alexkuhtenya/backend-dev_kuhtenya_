const Router = require('express')
const router = new Router()
const controller = require('../controllers/replyController')


router.post('/addReply' , controller.addReply)

router.patch('/Reply', controller.changeReply)




module.exports = router