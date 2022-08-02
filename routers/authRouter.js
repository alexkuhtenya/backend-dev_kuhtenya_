const Router = require('express')
const router = new Router()
const controller = require('../controllers/Auth_controller/authController')
const {check} = require('express-validator')
const roleMiddleware = require('../middleware/roleMiddleware')


router.post('/registration' ,[
    check ('username', 'имя пользователя не может быть пустым').notEmpty(),
    check ('password', 'пароль должен быть длинее 6 символов').isLength({min:6})
],controller.registration)


router.post('/login' , controller.login)


router.get('/users' ,roleMiddleware( ['ADMIN']), controller.getUsers)

module.exports = router