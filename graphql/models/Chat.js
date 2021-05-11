const {model, Schema} = require('mongoose')

const chatSchema = new Schema({
    from: String,
    message: String,
    to: String,
    createdAt: Date

})

module.exports = model('chats', chatSchema)
