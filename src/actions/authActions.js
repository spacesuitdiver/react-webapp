import request from 'axios';

const API_URL = 'https://api-v1.buzznog.com/auth/local';

export function login(credentials) {
  return (dispatch) => {
  request.post(API_URL, credentials)
  .then(res => {
    dispatch(persistAuth(res.data));
    dispatch(load(res.data));
  })
  }
}

export function load(data) {
  if (!data) data = JSON.parse(localStorage.auth);
  return {
    type: 'LOAD',
    data: data
  }
}

export function persistAuth(auth) {
  return {
    type: 'PERSIST_AUTH',
    persist: { auth: { auth } }
  }
}