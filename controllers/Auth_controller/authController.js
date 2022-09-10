const User = require('../../models/User_model/User')
const Role = require('../../models/Role_model/Role')
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require('../../config/config')

const generateAccesToken = (id , roles) =>{
const payload= {
    id ,roles
}
return jwt.sign(payload,secret,{expiresIn:"24h"} )
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json({message:'Ошибка при регистрации'})
            }
            const {username,email, password, roles} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message : 'Данное имя пользователя уже используется'})
            }
            const candidateEmail = await User.findOne({email})
            if (candidateEmail) {
                return res.status(400).json({message : 'Данный email уже используется'})
            }
            const hashPassword = bcrypt.hashSync(password , 8)
            const userRole = await Role.findOne({value: `${roles}`})
           const user = new User( {username, password: hashPassword , roles : [userRole.value]})
            await user.save();
            return res.json({message:'Пользователь успешно зарегистрирован'})
        } catch (e) {
            console.log(e)
            res.status(400).json({message :'registration error'})
        }
    }
    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                return res.status(400).json({message : 'Пользователь не найден'})
            }
            {
                const validPassword = bcrypt.compareSync(password,user.password)
                if (!validPassword) {
                    return res.status(400).json({message : 'Неверный пароль'})
                }
            }
            const token = generateAccesToken(user._id, user.roles)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message :'login error'})
        }
    }
    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}


module.exports = new AuthController()