const {gql} = require('apollo-server')

module.exports = gql`
    type Preference {
        #        Male, Female, or No Preference
        genderPreference: String
        #        bodybuilding, calisthenics, pilates, etc... 
        goalPreference: String
        #        how many times a week is the user looking to go to the gym
        frequencyPreference: Int
    }

    type User {
        id: ID
        token: String
        admin: Boolean
        username: String
        email: String
        phonenumber: String
        createdAt: String
        #        what city user is in
        city: String
        #        morning, noon, afternoon, evening, night, latenight
        timeAvailability: String
        #        example: 24 hour fitness or crunch
        gymName: String
        preferences: Preference
    }



    input RegisterInput {
        username: String
        password: String
        confirmPassword: String
        email: String
        phonenumber: String
    }

    input ExtraFieldinputs {
        userid: ID!
        city: String
        timeAvailability: String
        gymName: String
    }

    input PreferenceInput {
        userid: ID!
        genderPreference: String
        goalPreference: String
        frequencyPreference: Int
    }

    input inputID {
        id: ID!
    }

    type Query {
        #        User Queries
        getUsers: [User]
        getAUser(username: String!) : User
        #        Preference Queries
        getAUsersPreferences(userid: ID!): Preference
    }

    type Mutation {
        #        User Mutation
        login(username: String!, password: String!): User
        register(registerInput: RegisterInput): User
        setExtraUserFields(extraFields: ExtraFieldinputs) : User
        #        Preference Mutation
        setAUsersPreferences(preferenceInput: PreferenceInput) : Preference
    }
`
