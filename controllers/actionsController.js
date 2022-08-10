const Actions = require('../models/actions')


class actionsController {
    async addActions (req, res){
        try{
            const update = { title: req.body.title , description : req.body.description}
            Actions.updateOne( {},update ,(err) =>{
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
    }



async editActions (req, res) {
        try{
            const collections = db.getCollection('actions')
            const item ={
                title: req.body.title,
                description: req.body.description
            }
            const id = req.params.id
            collections.update({
                _id:id}, {
                $set : item
            })
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }
}

module.exports = new actionsController()

