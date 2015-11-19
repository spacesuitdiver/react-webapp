import request from 'axios';

const API_URL = 'https://api-v1.buzznog.com/auth/local';

export function login(credentials, history) {
  return {
    type: 'LOGIN',
    promise: request.post(API_URL, credentials),
    history: history,
    transition: '/'
  }
}