const defaultState = [];

export default function appReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_APPS_SUCCESS':
      return action.res.data;
    default:
      return state;
  }
}
