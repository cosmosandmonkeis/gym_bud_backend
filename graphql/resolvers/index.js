const serviceResolvers = require('./preferences')
const usersResolvers = require('./users')
const appointmentbookingResolvers = require('./appointmentbooking')

module.exports = {
    User: {
        ...usersResolvers.Preference,
    },
    Query: {
        ...serviceResolvers.Query,
        ...usersResolvers.Query,
        ...appointmentbookingResolvers.Query
    },
    Mutation: {
        ...serviceResolvers.Mutation,
        ...usersResolvers.Mutation,
        ...appointmentbookingResolvers.Mutation
    },
    Subscription: {
        ...appointmentbookingResolvers.Subscription,

    }

}
