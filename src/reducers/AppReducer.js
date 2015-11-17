import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function appReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_APPS_SUCCESS':
      return state.concat(action.res.data);
    case 'CREATE_APP_SUCCESS':
      return state.concat(action.res.data.text);
    case 'EDIT_APP_SUCCESS':
      return state.set(action.id, action.text);
    case 'DELETE_APP_SUCCESS':
      return state.delete(action.id);
    default:
      return state;
  }
}
