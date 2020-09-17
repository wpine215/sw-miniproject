import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {SurveyForm} from './../components/SurveyForm';

export class SurveyPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h3 style={styles.title}>
          Symptom Survey
        </Text>
        <Text>
          Hello, {this.props.location.state.userFirstName}! Please, complete the
          following survey.
        </Text>
        <SurveyForm
          firstName={this.props.location.state.userFirstName}
          email={this.props.location.state.userEmail}
          token={this.props.location.state.userToken}
          id={this.props.location.state.userID}
        />
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
