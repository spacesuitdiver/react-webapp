import React                   	from 'react';
import { Route, IndexRoute }	from 'react-router';
import App                     	from 'components/App';
import * as Pages               from 'components/pages';

export default function getRoutes(store) {

	const requireLogin = (nextState, replaceState, next) => {
		function checkAuth() {
			const { auth: { user }} = store.getState();
			console.log(store.getState());
			// if (!user) {
			// 	replaceState(null, '/login');
			// }
			next();
		}
	};

	return (
		<Route path="/" name="app" component={App}>
			<IndexRoute component={Pages.Dashboard} />
			<Route path="login" name="login" component={Pages.Login} />
			<Route path="signup" name="signup" component={Pages.SignUp} />
		</Route>
	);
}
