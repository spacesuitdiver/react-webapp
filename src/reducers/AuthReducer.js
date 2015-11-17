import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function authReducer(state = defaultState, action) {
	switch(action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				jwt: action.res.data.jwt,
				user: action.res
			};
		default:
			return state;
	}
}
