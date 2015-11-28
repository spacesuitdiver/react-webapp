import request from 'axios';

const API_URL = 'https://api-v1.buzznog.com/auth/local';

export function login(credentials) {
  return (dispatch) => {
	request.post(API_URL, credentials)
	.then(res => {
		dispatch(persistAuth(res.data));
		dispatch(updateAuth(res.data));
	})
  }
}

export function updateAuth(auth) {
  return {
    type: 'UPDATE_AUTH',
    data: auth
  }
}

export function persistAuth(auth) {
  return {
    type: 'PERSIST_AUTH',
    persist: { auth: { auth } }
  }
}