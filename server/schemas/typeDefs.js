const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    sounds: [Sound]
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
    mySounds: [Sound]
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
