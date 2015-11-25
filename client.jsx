import React                from 'react';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import { syncReduxAndRouter }    from 'redux-simple-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider }         from 'react-redux';
import * as reducers        from 'reducers';
import * as middleware 		from 'middleware';
import * as subscribers		from 'subscribers';
import getRoutes            from 'routes';

const initialState = window.__INITIAL_STATE__;

const history = createBrowserHistory();

const reducer  = combineReducers(reducers);
const middlewares = [ middleware.promiseMiddleware ];
const store    	= applyMiddleware(...middlewares)(createStore)(reducer, initialState);
syncReduxAndRouter(history, store);
store.subscribe(subscribers.loggedIn(store));
const routes 	= getRoutes(store);


render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
