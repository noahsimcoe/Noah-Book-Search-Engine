// import your models
const { Book, User } = require('../models');

const resolvers = {
    Query: {
        // the queries here will match up from the queries.js file
        getMe: async () => {
            // TODO
        },
    },

    Mutation: {
        // the mutations here will match up to the mutations.js file
        createUser: async ( /** add params */ ) => {

        },
        loginUser: async ( /** add params */ ) => {

        },
        saveBook: async ( /** add params */ ) => {

        },
        deleteBook: async ( /** add params */ ) => {

        },
    },
};

module.exports = resolvers;

// resolvers define how server will respond to gql queries/mutaitons