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
require('dotenv').config()

const mongoURL = 'mongodb+srv://kuhtenya:123321qweH@cluster0.gc6qdci.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
const app = express()

app.use(methodOverride('_method'))
app.use(bodyParser.json())
app.use("/api" , apiRouter)

const conn = mongoose.createConnection(mongoURL)

let gfs;
conn.once('open' , () => {
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('IMG')
})

const storage = new GridFsStorage({
    url: mongoURL,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });

app.get("/", (req, res) => {
    return res.status(200).json({message: "привет"})
})

app.post('/upload' ,upload.single('file'), (req, res) => {
res.redirect('/api/work/addWorker')
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