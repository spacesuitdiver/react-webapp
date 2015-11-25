import React                from 'react';
import { render }           from 'react-dom';
import { Router }           from 'react-router';
import { syncReduxAndRouter }    from 'redux-simple-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider }         from 'react-redux';
import getRoutes            from 'routes';
import createStore			from 'store/createStore';

const initialState = window.__INITIAL_STATE__;

const history = createBrowserHistory();
const store = createStore(initialState);
syncReduxAndRouter(history, store);

const routes 	= getRoutes(store);


render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
