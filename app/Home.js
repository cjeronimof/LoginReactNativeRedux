import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Homepage!</Text>
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
});

export default Home;
