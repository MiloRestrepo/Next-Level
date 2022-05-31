const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    
  }

  type Exercises {
    _id: ID

  }


  type Query {
    
    user(username: String!): User



    users: [User]
    exercises: [Exercises]
  }


`;
module.exports = typeDefs;