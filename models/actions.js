const {model, Schema} = require("mongoose");

const actions = new Schema({
    title: {type: String},
    description:{type: String}
})

module.exports = model('Actions' ,actions)