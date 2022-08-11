const Actions = require('../models/actions')


class actionsController {
    async addActions (req, res){
        try{
            const update = { title: req.body.title , description : req.body.description}
            Actions.updateOne( {    },update ,(err) =>{
                if(err){
                    console.log(err)
                } else {
                    console.log('success')
                }
            })


            console.log('Акции добавлена')
            res.status(200).json(Actions)
        } catch(e){
           res.status(500).json(e.message)
            console.log(e);
        }
    }

    async getActions(req, res) {
        try {
            const action = await Actions.find()
            res.json(action)
        } catch (e) {
            console.log(e)
        }
    }}



module.exports = new actionsController()

