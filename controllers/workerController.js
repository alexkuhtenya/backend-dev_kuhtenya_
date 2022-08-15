const Worker = require('../models/Workers')
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')



        class workerController{
            async addWorker(req, res) {
                try {
                    const obj = {
                        name : req.body.name,
                        img: {
                            data : fs.readFileSync(path.join(__dirname ,'..' , '/images/' + req.file.filename) ),
                            contentType: 'image/jpg'
                        }
                    }
                    const {fullName, workType, bumpix ,description, inst  } = req.body
                    const {image} = obj
            const worker = new Worker ( {fullName, workType,description, bumpix , inst },{image})
          await worker.save()
        console.log('работник добавлен успешно')
            return res.json(worker)
        } catch(e) {
            res.status(500).json(e.message)
         console.log(e)
        }
    }

    async imageForWorker(req, res ){
                try{

                } catch (e) {
                    console.log(e)
                }
    }

    async Worker(req,res) {
   await Worker.find({}, (err, items) => {
        if(err) {
            console.log(err);
            res.status(500).send('An error occurred ', err)
        } else{
            res.render({items: items})
        }
        })
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