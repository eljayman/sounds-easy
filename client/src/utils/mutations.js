import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        email
        username
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SOUND_TO_BOARD = gql`
  mutation Mutation($soundId: ID!) {
    addSoundToBoard(soundId: $soundId) {
      _id
    }
  }
`;

export const REMOVE_SOUND_FROM_BOARD = gql`
  mutation Mutation($soundId: ID!) {
    removeSoundFromBoard(soundId: $soundId) {
      _id
    }
  }
`;

export const REMOVE_USER = gql`
  mutation Mutation {
    removeUser {
      _id
      username
    }
  }
`;
