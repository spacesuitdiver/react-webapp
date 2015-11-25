import { createStore as _createStore,
         combineReducers,
         applyMiddleware }  from 'redux';
import * as reducers      from 'reducers';
import * as middlewares   from 'middlewares';
import * as subscribers   from 'subscribers';

const reducer = combineReducers(reducers);
const middleware = [ middlewares.promise ];

export default function createStore(initialState) {
  const store = applyMiddleware(...middleware)(_createStore)(reducer, initialState);
  store.subscribe(subscribers.loggedIn(store));

  return store;
}
