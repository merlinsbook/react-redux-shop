import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

// internal imports
import { AppView, stripeApiKey } from './config/lib';
import { configureStore } from './config/store';
import { createHistory } from './config/history';

const history = createHistory();

init();

async function init() {

  const store = await configureStore();

  const render = (Component, history, store) => {
    ReactDOM.render(
      <Component history={history} store={store} />,
      window.document.getElementById('app'));
  };

  render(AppView, history, store);

  if (module.hot) {
    module.hot.accept('./', () => {
      render();
    });
  }

};