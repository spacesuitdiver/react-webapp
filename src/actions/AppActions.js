import request from 'axios';

const API_URL = 'https://api-v1.buzznog.com/apps';

export function getApps() {
	return {
		type: 'GET_APPS',
		request: request.get(API_URL, { 
			headers: { 
				'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjo3LCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNDQ4NzUwMDAzLCJleHAiOjE0NDg4MzY0MDMsImF1ZCI6ImJ1enpub2cuY29tIiwiaXNzIjoiYnV6em5vZy5jb20ifQ.Si1n_RVrGBquWRbwn2zVi38MzFlv02pzRcGK-EaAOEc"
			}
		})
	}
}
