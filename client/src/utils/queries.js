import { gql } from '@apollo/client';

export const QUERY_MY_SOUNDS = gql`
  query Query {
    mySounds {
      _id
      soundName
      url
    }
  }
`;

export const QUERY_ME = gql`
  query Query {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_ALL_SOUNDS = gql`
sounds {
    _id
    soundName
    url
  }
}
`;
