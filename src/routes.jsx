import React                   	from 'react';
import { Route, IndexRoute }	from 'react-router';
import App                     	from 'components/App';
import * as Pages               from 'components/pages';
import { load as loadAuth } 	from 'actions/authActions';

export default function getRoutes(store) {

	const requireAuth = (nextState, replaceState, next) => {
		if (!store.getState().auth.isLoggedIn) replaceState({ nextPathname: nextState.location.pathname }, '/login');
		next();
	};

	return (
		<Route path="/" name="app" component={App}>
			<IndexRoute component={Pages.Dashboard} onEnter={requireAuth}/>
			<Route path="login" name="login" component={Pages.Login}/>
			<Route path="signup" name="signup" component={Pages.SignUp}/>
		</Route>
	);
}
