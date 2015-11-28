import request from 'axios';

const API_URL = 'https://api-v1.buzznog.com/auth/local';

export function login(credentials) {
  return {
    type: 'LOGIN',
    promise: request.post(API_URL, credentials)
  }
}

export function persistToken(token) {
  return {
    type: 'PERSIST_TOKEN',
    persist: { token: token }
  }
}