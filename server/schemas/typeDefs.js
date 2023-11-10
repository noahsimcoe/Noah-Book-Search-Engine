// used to structure the gql schema, specifying types/queries/mutations
// describes the data types and the relationships between them

const typeDefs = `
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book!]!
    }

    type Book {
        id: ID!
        authors: String!
        description: [String!]!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type Query {
        getMe(_id: String): [User]
    }

    type Mutation {
        createUser()
        loginUser()
        saveBook()
        deleteVook()
    }
`;

module.exports = typeDefs;