const Worker = require('../models/Workers')
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')



        class workerController{
            async addWorker(req, res) {
                try {
                    const imagee = {
                        img: {
                            data : fs.readFileSync(path.join(__dirname +'../images/' + req.body.filename) ),
                            contentType: 'image/jpg'
                        }
                    }
                    const {fullName, workType, bumpix ,description, inst  } = req.body
                    const {image} = imagee
            const worker = new Worker ( {fullName, workType,description, bumpix , inst , image })
          await worker.save()
        console.log('работник добавлен успешно')
            return res.json(worker)
        } catch(e) {
            res.status(500).json(e.message)
         console.log(e)
        }
    }

    async imageForWorker(req, res ){


                Worker.findOneAndUpdate({id}, {image : image} , err =>{
                    if(err){
                        console.log(err)
                    } else {
                        res.json({Worker})
                    }
                })
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