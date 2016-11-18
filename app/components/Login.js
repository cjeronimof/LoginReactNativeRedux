import React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.email = "";
    this.password = "";
  }

  login() {
    this.props.actions.login(this.email, this.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{this.props.auth.errorMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) => this.email = text}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => this.password = text}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={this.login.bind(this)}>
            <Text style={styles.buttonText}>Autenticar</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    height: 40,
    backgroundColor: '#81c04d',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  },
  error: {
    color: 'red'
  },
});

export default Login;
