import request from 'axios';

const API_URL = 'https://api-v1.buzznog.com/apps';

export function getApps() {
	return (dispatch, getState) => {
		dispatch({
			type: 'GET_APPS',
			request: request.get(API_URL, { 
				headers: { 
					'Authorization': 'Bearer ' + getState().auth.token
				}
			})
		});
	}
}
