import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/swapi',
  fetch,
});