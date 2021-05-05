const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    createdAt: String,
    username: String,
    password: String,
    email: String,
    admin: Boolean,
    phonenumber: String,
    signedUserAgreement : Boolean,
    city: String,
    timeAvailability: String,
    gymName: String,

})

module.exports = model('users', userSchema)
