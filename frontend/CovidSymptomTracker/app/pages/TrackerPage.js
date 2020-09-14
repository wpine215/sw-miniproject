import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export class TrackerPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tracker</Text>
        <Text>Tracker to be added soon.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color: 'white',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
