const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    admin: Boolean,
    createdAt: String,
    verified: Boolean,
    username: String,
    password: String,
    phonenumber: String,
    email: String,
    timeAvailability: String,
    gymName: String,
    genderPreference: String,
    goalPreference: String,
    frequencyPreference: Number

})

module.exports = model('users', userSchema)
