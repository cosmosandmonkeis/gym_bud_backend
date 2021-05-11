const Chat = require('../models/Chat')


module.exports = {
    Query: {
        async chats() {
            try {
                return await Chat.find()
            } catch (err) {
                throw new Error(err)
            }
        },
    }
    ,
    Mutation: {
        // sendMessage(from: String!, message: String!) : Chat
        async sendMessage(_, {from, message}, context) {
            try {
                const newchat = new Chat({
                    from,
                    message
                })
                const res = await newchat.save()
                console.log(res)
                context.pubsub.publish('CHAT_CHANNEL', {
                    messageSent: newchat
                })
                return newchat
            } catch (e) {
                throw new Error(e)
            }
        }
    },
    Subscription: {
        messageSent: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('CHAT_CHANNEL')
        }
    }

}
