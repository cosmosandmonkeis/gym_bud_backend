const Preferences = require('../models/Preference')
const User = require('../models/User')
const checkAuth = require('../../utils/checkAuth')

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
        /*
        * adds a Service object to mongodb
        * title(string), price(float), descr(string), category(String), context(browser header) -> service added(Service)
        * features: checks context if authorization token provided and user privileges provided,
        * checks if input service title is already added,
        * */
        // async addService(_, {serviceInput: {title, price, description, category}}, context) {
        //     const user = checkAuth(context)
        //     const databaseUser = await User.findById(user.id)
        //
        //     if (databaseUser.admin === false)
        //         throw new Error('User does not have required privileges')
        //
        //     const titleAlreadyInsideService = await Preferences.findOne({title: title})
        //     if (titleAlreadyInsideService != null)
        //         return new Error(`Service with title: '${title}' already exists.`)
        //
        //     try {
        //         const service = new Preferences({
        //             title,
        //             price,
        //             description,
        //             date: new Date().toISOString(),
        //             category,
        //         })
        //         return await service.save()
        //     }
        //     catch (err) {
        //         throw new Error(err)
        //     }
        //
        // },
    }
}
