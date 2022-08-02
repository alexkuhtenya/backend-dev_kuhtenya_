const Actions = require('../models/actions')

class actionsController {
    async addActions (req, res){
        try{
            const {title,description} = req.body
            const action = new Actions({title,description})
            await action.save()
            console.log('Акции добавлена')
            return res.json({action})
        } catch(e){
           res.status(500).json(e.message)
            console.log(e);
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

