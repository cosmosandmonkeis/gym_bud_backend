const usersResolvers = require('./users')
const chatResolvers = require('./chats')

module.exports = {
    Query: {
        ...usersResolvers.Query,
        ...chatResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...chatResolvers.Mutation
    },
    Subscription: {
        ...chatResolvers.Subscription
    }

}
