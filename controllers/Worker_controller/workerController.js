const Worker = require('../../models/Workers_model/Workers')



class WorkerController {
    async addWorker(req, res) {
        try {
            const obj = {
                fullName: req.body.fullName,
                workType: req.body.workType,
                description: req.body.description,
                bumpix: req.body.bumpix,
                inst: req.body.inst,
                image: req.body.image
            }
            const worker = new Worker(obj)
            await worker.save()
            console.log('работник добавлен успешно')
            return res.json(worker)
        } catch (e) {
            res.status(500).json(e.message)
            console.log(e)
        }
    }

    async getWorkers(req, res) {
        try {
            const worker = await Worker.find()
            res.json(worker)
        } catch (e) {
            console.log(e)
        }
    }

    async editWorkers(req, res) {
        try {
            const update = {
                fullName: req.body.fullName,
                workType: req.body.workType,
                bumpix: req.body.bumpix,
                inst: req.body.inst,
                description: req.body.description,
                image: req.body.image
            }
            const id = req.body._id
            Worker.findByIdAndUpdate(id, update, (err) => {
                if (!err) {
                    return res.status(200).json({message: "success"})
                } else {
                    res.status(500).json(err.message)
                }
            })
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delWorker(req, res) {
        try {
            const id = req.body._id
            Worker.findByIdAndRemove(id, err => {
                    if (!err) {
                        res.status(200).json({message: "Работник успешно удален"})
                    } else {
                        res.status(500).json(err.message)
                    }
                }
            )
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}


module.exports = new WorkerController()