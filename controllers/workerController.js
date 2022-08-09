const Worker = require('../models/Workers')


class workerController{
    async addWorker(req, res) {
        try {
        const {fullName, workType, bumpix , inst , IMG} = req.body
        const worker = new Worker ( {fullName, workType, bumpix , inst , IMG})
        await worker.save()
        console.log('работник добавлен успешно')
            return res.json({worker})
        } catch(e) {
            res.status(500).json({message: 'ошибка при добавлении работника'})
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