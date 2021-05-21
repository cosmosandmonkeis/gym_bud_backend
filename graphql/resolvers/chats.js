const Chat = require('../models/Chat')
const User = require('../models/User')

module.exports = {
    Query: {
        async chats(_, {otherUser}) {
            try {
                return await Chat.find({from: otherUser})
            } catch (err) {
                throw new Error(err)
            }
        },
    }
    ,
    Mutation: {
        // sendMessage(from: String!, message: String!) : Chat
        async sendMessage(_, {from, to, message}, context) {
            try {
                const newchat = new Chat({
                    from,
                    message,
                    to,
                    createdAt: new Date().toISOString()
                })
                await newchat.save()
                await User.findOneAndUpdate({username: from}, {
                    $addToSet: {contacts: [to]}
                })
                await context.pubsub.publish('NEW_MESSAGE', {
                    messageSent: newchat
                })
                return true
            } catch (e) {
                console.log(e)
                return false
            }
        }
    },
    Subscription: {
        newMessage: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(['NEW_MESSAGE'])
        }
    }

}
