const Worker = require('../models/Workers')
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')



        class workerController{
            async addWorker(req, res) {
                try {
                    const obj = {
                        fullName : req.body.fullName,
                        workType: req.body.workType,
                        description: req.body.description,
                        bumpix: req.body.bumpix,
                        inst: req.body.inst,
                        image: {

                            data : fs.readFileSync(path.join(__dirname ,'..' , '/images/' + req.file.filename) ),
                            contentType: 'image/jpg'

                        }
                    }

            const worker = new Worker (obj)
          await worker.save()
        console.log('работник добавлен успешно')
            return res.json(worker)
        } catch(e) {
            res.status(500).json(e.message)
         console.log(e)
        }
    }

    async getWorkers(req, res ){
                try {
                   const worker =  await Worker.find()
                    res.json(worker)
                }
                 catch (e) {
                    console.log(e)
                }
    }
}





module.exports = new workerController()