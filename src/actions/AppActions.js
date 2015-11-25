import request from 'axios';

const API_URL = 'https://api-v1.buzznog.com/apps';

export function getApps() {
	return {
		type: 'GET_APPS',
		promise: request.get(API_URL, { 
			headers: { 
				'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo3LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNDQ4NDkyMDkyLCJleHAiOjE0NDg1Nzg0OTIsImF1ZCI6ImJ1enpub2cuY29tIiwiaXNzIjoiYnV6em5vZy5jb20ifQ.w2soRQya3qV6odWp7X2YqCo_BDsL58RjSrDEchGmaK8"
			}
		})
	}
}
