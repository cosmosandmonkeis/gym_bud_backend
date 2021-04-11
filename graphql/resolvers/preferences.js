const Preferences = require('../models/Preference')
const User = require('../models/User')

module.exports = {
    Query: {
        async getAUsersPreferences(_, {userid}) {
            try {
                return await User.findById(userid, 'preferences')

            } catch (err) {
                throw new Error(`Cannot grab userid's preferences`)
            }
        },
    },
    Mutation: {
        async setAUsersPreferences(_, {preferenceInput}) {
            try {

                const preference = new Preferences({
                    genderPreference: preferenceInput.genderPreference,
                    goalPreference: preferenceInput.goalPreference,
                    frequencyPreference: preferenceInput.frequencyPreference
                })
                await preference.save()
                return await User.findByIdAndUpdate({_id: preferenceInput.userid}, {
                    $set: {
                        preferences: preference._id
                    }
                })
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}
