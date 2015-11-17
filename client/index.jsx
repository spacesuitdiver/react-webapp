import React                from 'react';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider }         from 'react-redux';
import { fromJS }           from 'immutable';
import * as reducers        from 'reducers';
import * as middleware 		from 'middleware';
import getRoutes            from 'routes';
import immutifyState        from 'lib/immutifyState';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';

const initialState = immutifyState(window.__INITIAL_STATE__);

const history = createBrowserHistory();

const reducer  = combineReducers(reducers);
const middlewares = [ middleware.promiseMiddleware ];
const store    	= applyMiddleware(...middlewares)(createStore)(reducer, initialState);
const routes 	= getRoutes(store);

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
