import { createStore as _createStore,
         combineReducers,
         applyMiddleware }  from 'redux';
import * as reducers      from 'reducers';
import * as middlewares   from 'middlewares';

import { updatePath } from 'actions/routerActions';

const reducer = combineReducers(reducers);
const middleware = [ middlewares.thunk, middlewares.persist, middlewares.request ];

export default function createStore(initialState) {
  const store = applyMiddleware(...middleware)(_createStore)(reducer, initialState);

  store.subscribe(() => {
  	const state = store.getState();
  	if (state.auth.isLoggedIn 
  		&& state.routing.path == "/login") store.dispatch(updatePath('/'));
  });

  return store;
}
