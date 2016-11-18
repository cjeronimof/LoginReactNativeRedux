/**
 * @flow
 */

import authService from '../services/authService';

export default {
  login(email, password) {
      if (email.trim() != "" && password.trim() != "") {
         return authService.login(email, password);
      } else {
         return Promise.reject();
      }
  }
}
