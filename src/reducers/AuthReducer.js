import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function authReducer(state = defaultState, action) {
  switch(action.type) {
    case 'LOGIN':
      return state.concat(action.res.data);
    default:
      return state;
  }
}
