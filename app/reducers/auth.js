/**
 * @flow
 */

 export default function authReducer(state = {isAuthenticate: false, errorMessage: null}, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return Object.assign({}, state, { isAuthenticate: true, errorMessage: null });
        break;
      case 'LOGIN_FAILED':
        return Object.assign({}, state, { isAuthenticate: false, errorMessage: action.errorMessage });
        break;
      case 'LOGOUT_SUCCESS':
        return Object.assign({}, state, { isAuthenticate: false, errorMessage: null });
        break;
      case 'LOGOUT_FAILED':
        return Object.assign({}, state, { isAuthenticate: false, errorMessage: action.errorMessage });
        break;
      default:
        return state;
    }
 }
