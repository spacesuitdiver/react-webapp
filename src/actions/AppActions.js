import request from 'axios';

const API_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';

export function getApps() {
  return {
    type: 'GET_APPS_SUCCESS',
    promise: request.get(API_URL)
  }
}

export function createApp(text) {
  return {
    type: 'CREATE_APP_SUCCESS',
    promise: request.post(API_URL, { time: Date.now(), text })
  };
}

export function editApp(id, text) {
  return {
    type: 'EDIT_APP_SUCCESS',
    id,
    text,
    date: Date.now()
  };
}

export function deleteApp(id) {
  return {
    type: 'DELETE_APP_SUCCESS',
    id
  };
}
