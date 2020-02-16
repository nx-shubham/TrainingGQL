import { gql } from 'apollo-boost';

export const getUserDetails = gql`
query {
    getUserDetails{
        email
        role
    }
}
`;

export const getUser = gql`
  query getUser($data:usersRole) {
    getUser(data:$data)
    {
    read
    write
    delete
    error
    }
  }
`;
