import { updatePath } from 'redux-simple-router';

export default function loggedInSubscriber(store) {
	const state = store.getState();
	console.log(state);
	if (state.auth.isLoggedIn && state.routing.path == "/login") store.dispatch(updatePath('/'))
}
