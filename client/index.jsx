import React                from 'react';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider }         from 'react-redux';
import { fromJS }           from 'immutable';
import * as reducers        from 'reducers';
import * as middleware 		from 'middleware';
import routes               from 'routes';
import immutifyState        from 'lib/immutifyState';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';

const initialState = immutifyState(window.__INITIAL_STATE__);

const history = createBrowserHistory();

const reducer  = combineReducers(reducers);
const middlewares = [ middleware.promiseMiddleware ];
const store    = applyMiddleware(...middlewares)(createStore)(reducer);

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
