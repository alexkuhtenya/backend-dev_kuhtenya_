
const {model, Schema} = require("mongoose");
const Review = new Schema({
    _id:{},
    Name : {type: String , required : true},
    email : {type: String , required : false},
    userReview: {type: String , required : true},
    reply: {type:String}
})

module.exports = model('Review' , Review)