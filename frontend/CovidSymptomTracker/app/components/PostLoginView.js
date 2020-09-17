import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {Redirect} from 'react-router-native';
import {StatPreview} from './StatPreview';

export class PostLoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {goToSurvey: false, goToTracker: false};
  }

  handleSurveyButton = () => {
    this.setState({goToSurvey: true});
  };

  handleTrackerButton = () => {
    this.setState({goToTracker: true});
  };

  render() {
    if (this.state.goToSurvey) {
      return (
        <Redirect
          to={{
            pathname: '/survey',
            state: {
              userFirstName: this.props.firstName,
              userEmail: this.props.email,
              userToken: this.props.token,
              userID: this.props.id,
            },
          }}
        />
      );
    } else if (this.state.goToTracker) {
      return (
        <Redirect
          to={{
            pathname: '/track',
            state: {
              userID: this.props.id,
            },
          }}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text h3 style={styles.title}>
          BU COVID-19 Symptom Tracker
        </Text>
        <Button
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          title="Report Symptoms"
          onPress={this.handleSurveyButton}
        />
        <Button
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          title="Track Past Symptoms"
          onPress={this.handleTrackerButton}
        />
        <StatPreview />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    padding: 30,
  },
  title: {
    textAlign: 'center',
    margin: 10,
    color: '#2d2926',
  },
  button: {
    backgroundColor: '#CC0000',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderColor: '#2d2926',
    width: 200,
  },
  buttonContainer: {
    padding: 20,
  },
});
