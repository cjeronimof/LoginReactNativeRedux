/**
 * @flow
 */

export default {
  login(email, password) {
    return new Promise((resolve, reject) => {

      fetch('teste', {
        method: 'POST',
        body: JSON.stringify({
          username: email,
          password: password,
          client_id: 'teste',
          grant_type: 'password',
        })
      }).then(function(response) {
        if(response.ok) {
          resolve({auth: response.data});
        } else {
          reject({message: "Api Login failed!"});
        }
        return response.data
      });

    });
  }
}
