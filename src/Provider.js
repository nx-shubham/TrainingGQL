import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import client from './Apollo';

const Provider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;
