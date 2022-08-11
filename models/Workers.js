const {Schema, model} = require('mongoose')



const Worker = new Schema({
    // fullName : {type: String , required : true},
    // workType : {type: String , required : true},
    // bumpix :{type: String},
    // inst: {type: String},
    // description :{type: String , required: true},
    image : {type: String, required : true}
})

module.exports = model('Workers' , Worker)