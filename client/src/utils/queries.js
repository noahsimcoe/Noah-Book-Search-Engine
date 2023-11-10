import { gql } from '@apollo/client';

// route to get logged in user's info
export const QUERY_LOGIN = gql`
    query login {
        user {
            _id
            username
            email
            password
            savedBooks
        }
    }
`;