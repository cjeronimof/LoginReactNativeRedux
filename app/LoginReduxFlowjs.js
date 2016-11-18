/**
 * @flow
 */

import React from 'react';
import {bindActionCreators, dispatch} from 'redux';
import * as todoActions from './actions/authActions';
import { connect } from 'react-redux'
import Login from './components/Login';

class LoginReduxFlowjs extends React.Component {

  render() {
     const { auth, actions } = this.props;
     return (
      <Login auth={auth}  {...actions} />
     );
  }

};

function mapStateToProps(state) {
   return { auth: state.auth }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(todoActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
