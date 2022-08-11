const express = require('express')
const mongoose = require('mongoose')
const {connect: connect1, mongo} = require("mongoose");
const apiRouter = require('./routers/apiRouter')
const path = require('path')
const multer = require('multer')
const methodOverride = require('method-override')
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload')
require('dotenv').config()

const mongoURL = 'mongodb+srv://kuhtenya:123321qweH@cluster0.gc6qdci.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
const app = express()


app.use('/images' , express.static(path.join(__dirname , 'images')))
app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use(fileUpload({}))
app.use("/api" , apiRouter)


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