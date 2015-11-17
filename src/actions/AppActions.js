import request from 'axios';

const API_URL = 'https://api-v1.buzznog.com/apps';

export function getApps() {
  return {
    type: 'GET_APPS',
    promise: request.get(API_URL, { 
      headers: { 
      	'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo3LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNDQ3NzkxMDAyLCJleHAiOjE0NDc4Nzc0MDIsImF1ZCI6ImJ1enpub2cuY29tIiwiaXNzIjoiYnV6em5vZy5jb20ifQ.Q1pogC5GuYOZofpwIg-9WPEdtqrdqBQhlWvHIMjeUZM' 
      }
    })
  }
}
