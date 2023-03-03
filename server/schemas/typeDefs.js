const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    soundboards: [Soundboard]
  }

  type Sound {
    _id: ID
    name: String
    url: String
  }

 

  type Auth {
    token: ID!
   user: User
  }

  type Query {
    user(username: String!): User
    me: User
    sounds: [Sound]
    sound(soundId: ID!)
     }

  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSoundToBoard(soundId: ID!): User
    removeSoundFromBoard(soundId: ID!): User
  }
`;

module.exports = typeDefs;