const {gql} = require('apollo-server')

module.exports = gql`

    type User {
        id: ID
        token: String
        emailToken: String
        admin: Boolean
        createdAt: String
        verified: Boolean
        username: String
        phonenumber: String
        #        need calpoly email 
        email: String
        #        morning, noon, afternoon, evening, night, latenight
        timeAvailability: String
        #        example: Calpoly Rec Center 
        gymName: String
        #        Male, Female, or No Preference
        genderPreference: String
        #        bodybuilding, calisthenics, pilates, etc... 
        goalPreference: String
        #        how many times a week is the user looking to go to the gym
        frequencyPreference: Int
    }
    
    input RegisterInput {
        username: String
        password: String
        confirmPassword: String
        email: String
        phonenumber: String
    }

    input ExtraFieldinputs {
        username: String
        timeAvailability: String
        gymName: String
        genderPreference: String
        goalPreference: String
        frequencyPreference: Int
    }

    type Query {
        #        User Queries
        getUsers: [User]
        getAUser(username: String!) : User
    }

    type Mutation {
        #        User Mutation
        login(username: String!, password: String!): User
        register(registerInput: RegisterInput): User
        #        set other user var
        setExtraUserFields(extraFields: ExtraFieldinputs) : User
    }
`
