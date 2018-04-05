import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { fromJS } from 'immutable';

import createReducer from './reducers';

export async function configureStore(initialState = {}) {

  const middlewares = [
    routerMiddleware(hashHistory),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];
  
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */
  
  const store = createStore(
    createReducer({
      routing: routerReducer,
    }),
    initialState,
    composeEnhancers(...enhancers),
  );

  store.subscribe(() => {
    localStorage.setItem('shopState', JSON.stringify(store.getState()))
  });

  return store;
}
