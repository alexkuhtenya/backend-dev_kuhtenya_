const {model, Schema} = require("mongoose");
const Reply = new Schema({
    id:{type: String},
    adminReply: {type: String , required : true}
})

module.exports = model('Reply' , Reply)