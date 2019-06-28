/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './src/apollo/client';

// Styles
import "./src/style/style.scss";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
