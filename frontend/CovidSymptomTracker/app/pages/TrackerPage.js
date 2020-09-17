import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TrackerView} from './../components/TrackerView';

export class TrackerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>COVID-19 Symptom Tracker</Text>
        <TrackerView userID={this.props.location.state.userID} />
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
