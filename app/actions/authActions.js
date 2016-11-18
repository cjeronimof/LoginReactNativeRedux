/**
 * @flow
 */

import authController from '../../core/controllers/authController';
import { Actions } from 'react-native-router-flux';

 export function login(email, password) {
   return function(dispatch) {

     authController.login(email, password)
        .then(function(data) {
          dispatch({
            type: "LOGIN_SUCCESS"
          });
          Actions.home();

        }).catch(function(err) {
          dispatch({
            type: "LOGIN_FAILED",
            errorMessage: err.message
          });
        });

   }

}

export function logOut(email, password) {
  return function(dispatch) {

    authController.logOut(email, password)
       .then(function() {
         dispatch({
           type: "LOGOUT_SUCCESS"
         });
       }).catch(function(err) {
         dispatch({
           type: "LOGOUT_FAILED",
           errorMessage: err.message
         });
       });

  }

}
