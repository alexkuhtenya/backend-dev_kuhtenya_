const {Schema, model} = require('mongoose')



const Worker = new Schema({
    id : {type: String},
    fullName : {type: String , required : true},
    workType : {type: String , required : true},
    bumpix :{type: String},
    inst: {type: String},
    description :{type: String , required: true},
    image : {
        img : {
            data: Buffer,
            contentType: String
        }
    }
})

module.exports = model('Workers' , Worker)