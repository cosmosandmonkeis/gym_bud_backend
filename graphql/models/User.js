const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    admin: Boolean,
    phonenumber: String,
    signedUserAgreement : Boolean,
    city: String,
    timeAvailability: String,
    gymName: String,
    preferences: {
        type: Schema.Types.ObjectId,
        ref: 'preferences'
    }

})

module.exports = model('users', userSchema)
