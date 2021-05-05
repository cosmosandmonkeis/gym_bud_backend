const preferenceResolvers = require('./preferences')
const usersResolvers = require('./users')

module.exports = {
    Query: {
        ...preferenceResolvers.Query,
        ...usersResolvers.Query,
    },
    Mutation: {
        ...preferenceResolvers.Mutation,
        ...usersResolvers.Mutation,
    },

}
