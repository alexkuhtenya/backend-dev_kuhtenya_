const Worker = require('../models/Workers')


class workerController{
    async addWorker(req, res) {
        try {
        const {fullName, workType, bumpix ,description, inst , image} = req.body
        const worker = new Worker ( {fullName, workType,description, bumpix , inst , image})
        await worker.save()
        console.log('работник добавлен успешно')
            return res.json({worker})
        } catch(e) {
            res.status(400).json(e.message)
         console.log(e)
        }
    }

    async addImage(req, res) {
        try{

        } catch(e){
            res.status(500).json({message: 'Ошибка при добавлении фотографии'})
            console.log(e)
        }
    }
}


module.exports = new workerController()