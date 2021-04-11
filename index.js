require('dotenv').config()
const {ApolloServer, PubSub} = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const MONGO_DB = process.env.MONGO_DB

const PORT = process.env.PORT || 5000

const pubsub = new PubSub()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        return {req, pubsub}
    }
})
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(
        () => {
            console.log('MongoDB connected')
            return server.listen({port: PORT})
        }
    )
    .then(
        res => {
            console.log(`Server running at ${res.url}`)
        }
    ).catch(err => console.log(err))
