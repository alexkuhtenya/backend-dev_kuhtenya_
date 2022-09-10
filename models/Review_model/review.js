
const {model, Schema} = require("mongoose");
const Review = new Schema({
    id: {type: String},
    name : {type: String , required : true},
    email : {type: String , required : false},
    userReview: {type: String , required : true},
    reply: {type:String},
    is_published:{type : Boolean , require: true}
})

module.exports = model('Review' , Review)