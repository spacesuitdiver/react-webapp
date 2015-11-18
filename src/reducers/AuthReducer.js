const defaultState = {
	user: null,
	token: null,
	isLoggedIn: false
};

export default function authReducer(state = defaultState, action) {
	switch(action.type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				user: action.res.data.user,
				token: action.res.data.token,
			};
		default:
			return state;
	}
}
