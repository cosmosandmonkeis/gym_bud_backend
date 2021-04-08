const {gql} = require('apollo-server')

module.exports = gql`
    type User {
        id: ID
        token: String
        admin: Boolean
        username: String
        email: String
        phonenumber: String
        createdAt: String
    }

    input RegisterInput {
        username: String
        password: String
        confirmPassword: String
        email: String
        phonenumber: String
    }

    input inputID {
        id: ID!
    }

    type Query {
        getUsers: [User]
        getAUser(username: String!) : User
    }

    type Mutation {
        login(username: String!, password: String!): User
        register(registerInput: RegisterInput): User
    }

    type Subscription {
#        newBookings: AppointmentBooking
    }
`
