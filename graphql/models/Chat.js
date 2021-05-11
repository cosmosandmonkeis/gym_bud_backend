const {model, Schema} = require('mongoose')

const chatSchema = new Schema({
    from: String,
    message: String

})

module.exports = model('chats', chatSchema)
