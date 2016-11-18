/**
 * @flow
 */

import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import LoginReduxFlowjs from './LoginReduxFlowjs';
import Home from './Home';
import {Scene, Router} from 'react-native-router-flux';

export default class App extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="login" component={LoginReduxFlowjs} title="Login" initial={this.props.auth == null || !this.props.auth.isAuthenticate}/>
            <Scene key="home" component={Home}/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
