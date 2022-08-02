const express = require('express')
const mongoose = require('mongoose')
const {connect: connect1} = require("mongoose");
const apiRouter = require('./routers/apiRouter')
require('dotenv').config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use("/api" , apiRouter)


const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://kuhtenya:123321qweH@cluster0.gc6qdci.mongodb.net/?retryWrites=true&w=majority`,{ useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT , () => console.log(`started on port ${PORT}`) )
    }  catch(e) {
        console.log(e)
    }
}

start()