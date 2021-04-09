const {model, Schema} = require('mongoose')

const preferenceSchema = new Schema({
    genderPreference: String,
    goalPreference: String,
    frequencyPreference: Number,
})

module.exports = model('preferences', preferenceSchema)
