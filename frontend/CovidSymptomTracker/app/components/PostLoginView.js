import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {Redirect} from 'react-router-native';

export class PostLoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {goToSurvey: false};
  }

  handleSurveyButton = () => {
    this.setState({goToSurvey: true});
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
    }
    return (
      <View>
        <Text h3 style={styles.title}>
          BU COVID-19 Symptom Tracker
        </Text>
        <Button
          buttonStyle={styles.button}
          title="Track Your Symptoms"
          onPress={this.handleSurveyButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  title: {
    textAlign: 'center',
    margin: 10,
    color: '#383838',
  },
  button: {
    backgroundColor: '#CC0000',
  },
});
