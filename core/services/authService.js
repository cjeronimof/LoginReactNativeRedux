/**
 * @flow
 */

import authApi from '../api/authApi';

export default {
  login(email, password) {
    return authApi.login(email, password);
  },

  // logout e etc ....
}
