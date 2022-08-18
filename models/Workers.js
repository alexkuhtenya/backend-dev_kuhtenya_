const {Schema, model} = require('mongoose')
const {isBase64} = require("validator");
const buffer = require("buffer");



const Worker = new Schema({
    id : {type: String},
    fullName : {type: String , required : true},
    workType : {type: String , required : true},
    bumpix :{type: String},
    inst: {type: String},
    description :{type: String , required: true},
    image : {
    type: String
    }
})

module.exports = model('Workers' , Worker)