const express = require('express')
const mongoose = require('mongoose')
const {connect: connect1, mongo} = require("mongoose");
const apiRouter = require('./routers/apiRouter')
const path = require('path')
const imgModel = require('./models/img');
const bodyParser = require("body-parser");
const fs = require('fs')
require('dotenv').config()


const mongoURL = 'mongodb+srv://kuhtenya:123321qweH@cluster0.gc6qdci.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
const app = express()

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
            cb ( null , 'images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage : storage})



app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(bodyParser.json())
app.use("/api" , apiRouter)



app.post('/pp', upload.single('image'), (req, res, next) => {

    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});




app.post('/upload', upload.single('image') , (req,res)=>{
    res.json(req.file)
} )

app.get("/", (req, res) => {
    return res.status(200).json({message: "привет"})
})





const start = async () => {
    try {
        await mongoose.connect(`${mongoURL}`,{ useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT , () => console.log(`started on port ${PORT}`) )
    }  catch(e) {
         console.log(e)
    }
}

start()