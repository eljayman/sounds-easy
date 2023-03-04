const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    soundboard: [Sound]
  }

  type Sound {
    _id: ID
    soundName: String
    url: String
  }

  type Auth {
    user: User
    token: ID!
  }

  type Query {
    user(username: String!): User
    users: [User]
    me: User
    sounds: [Sound]
    sound(soundId: ID!): Sound
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser: User
    login(email: String!, password: String!): Auth
    addSoundToBoard(soundName: String!, url: String!): User
    removeSoundFromBoard(id: ID!): User
  }
`;

module.exports = typeDefs;
