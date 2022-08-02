const {Schema, model} = require('mongoose')



const Worker = new Schema({
    fullName : {type: String , required : true},
    workType : {type: String , required : true},
    specification: {type: String , required : true},
    IMG : {data : Buffer, contentType : String, required: false}
})

module.exports = model('Workers' , Worker)