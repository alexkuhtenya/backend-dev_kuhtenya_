const {model, Schema} = require("mongoose");

const Review = new Schema({
    Name : {type: String , required : true},
    email : {type: String , required : false},
    userReview: {type: String , required : true}
})

module.exports = model('Review' , Review)