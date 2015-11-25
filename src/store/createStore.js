import { createStore as _createStore,
         combineReducers,
         applyMiddleware }  from 'redux';
import * as reducers      from 'reducers';
import * as middlewares   from 'middlewares';

import { updatePath } from 'redux-simple-router';

const reducer = combineReducers(reducers);
const middleware = [ middlewares.promise ];

export default function createStore(initialState) {
  const store = applyMiddleware(...middleware)(_createStore)(reducer, initialState);

  store.subscribe(() => {
  	const state = store.getState();
  	if (state.auth.isLoggedIn 
  		&& state.routing.path == "/login") store.dispatch(updatePath('/'));
  });

  return store;
}
