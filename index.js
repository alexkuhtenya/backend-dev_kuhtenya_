const express = require('express')
const mongoose = require('mongoose')
const {connect: connect1, mongo} = require("mongoose");
const apiRouter = require('./routers/apiRouter')
const path = require('path')
const crypto = require('crypto')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const methodOverride = require('method-override')
const bodyParser = require("body-parser");
const {diskStorage} = require("multer");
require('dotenv').config()

const mongoURL = 'mongodb+srv://kuhtenya:123321qweH@cluster0.gc6qdci.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
const app = express()


app.use('/images' , express.static(path.join(__dirname , 'images')))
app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use("/api" , apiRouter)



const storage = multer.diskStorage({
    destination :(req, file ,cb) => {
        cb(null, 'images/')
    },
    filename:(req , file, cb) =>{
        console.log(file)
        cb(null , Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage:storage} );

const conn = mongoose.createConnection(mongoURL)

app.set("view engine" , "ejs")

app.get('/upload' ,(req ,res) =>{
    res.render('upload');
})

app.get("/", (req, res) => {
    return res.status(200).json({message: "привет"})
})

app.post('/upload' , upload.single('image'), (req, res) => {
try {
    res.status(210).json(req.file)

} catch(e) {
    console.log(req.data)
}})


const start = async () => {
    try {
        await mongoose.connect(`${mongoURL}`,{ useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT , () => console.log(`started on port ${PORT}`) )
    }  catch(e) {
        console.log(e)
    }
}

start()