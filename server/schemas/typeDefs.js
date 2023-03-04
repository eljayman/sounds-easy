const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Sound {
    _id: ID
    name: String
    url: String
  }

  type Soundboard {
    _id: ID
    sounds: [Sound]
  }

  type Auth {
    token: ID!
    user: User
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
    addSoundToBoard(soundId: ID!): User
    removeSoundFromBoard(soundId: ID!): User
  }
`;

module.exports = typeDefs;
