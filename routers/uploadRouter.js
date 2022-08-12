const Router = require('express')
const router = new Router()
const uploadMiddleware = require('../middleware/uploadMiddleware')

router.get('/upload', (req,res) => {
    res.render("upload")
})

router.post('/upload',uploadMiddleware.single() , (req,res)=>{
    try{
        if(req.file) {
            res.json(req.file)
        } else {
          res.json(req.file)
        }
    } catch (e) {
        console.log(e)
    }
})
module.exports = router