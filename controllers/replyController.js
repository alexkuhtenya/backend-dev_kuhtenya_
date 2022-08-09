


class workerController{
    async addReply(req, res) {
        try {
            const {fullName, workType, specification , IMG} = req.body
            const worker = new Worker ( {fullName, workType, specification, IMG})
            await worker.save()
            console.log('работник добавлен успешно')
            return res.json({worker})
        } catch(e) {
            res.status(500).json({message: 'ошибка при добавлении работника'})
            console.log(e)
        }
    }
}


module.exports = new workerController()