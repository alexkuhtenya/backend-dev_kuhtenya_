const Worker = require('../models/Workers')
const uuid = require('uuid')
const path = require('path')
const User = require("../models/User");


        class workerController{
            async addWorker(req, res) {
                try {
                    const {fullName, workType, bumpix ,description, inst } = req.body
                    const {image}= req.files
                    let fileName = uuid.v4() + ".jpg"
           image.mv(path.resolve(__dirname,"..", "images", fileName))
            const worker = new Worker ( {fullName, workType,description, bumpix , inst , image: fileName })
          await worker.save()
        console.log('работник добавлен успешно')
            return res.json(worker)
        } catch(e) {
            res.status(400).json(e.message)
         console.log(e)
        }
    }

    async getWorkers(req, res) {
        try {
            const workers = await Worker.find()
            res.json(workers)
        } catch (e) {
            console.log(e)
        }

    }

        }





module.exports = new workerController()