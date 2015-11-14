import React                   	from 'react';
import { Route, IndexRoute }	from 'react-router';
import App                     	from 'components/App';
import * as Pages               from 'components/pages';

export default (
  <Route name="app" component={App} path="/">
      <IndexRoute component={Pages.Dashboard} />
  </Route>
);
