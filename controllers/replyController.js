const Reply = require('../models/reply')


class replyController{
    async addReply(req, res) {
        try {
            const {adminReply} = req.body
            const reply = new Reply ({adminReply})
            await reply.save(function(){

            })
            return res.status(200).json({message : "Ответ оставлен"})
        } catch(e) {
            res.status(500).json({message: 'ошибка при добавлении ответа'})
            console.log(e)
        }
    }

    async changeReply(req, res) {
        try {
            const update = {adminReply:req.body.adminReply}
            const id = req.body._id
            Reply.findOneAndUpdate({id}, update, err => {
                if(!err) {
                    res.status(200).json({message:'ответ изменен успешно'})
                } else {
                    res.status(500).json(err.message)
                }
            })
        } catch(e) {
            res.status(500).json({message:'Ошибка'})
        }
    }
}


module.exports = new replyController()