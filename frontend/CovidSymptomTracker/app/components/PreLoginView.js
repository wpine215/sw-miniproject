import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-elements';
import {LoginComponent} from './LoginComponent';

export class PreLoginView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./../assets/images/prudential_river.jpg')}
          style={styles.backgroundImage}
          blurRadius={1.5}
        />
        <View style={styles.titleContainer}>
          <Text h3 style={styles.title}>
            BU COVID-19 Symptom Tracker
          </Text>
        </View>
        <LoginComponent returnStatus={this.props.returnStatus} />
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
  titleContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    textAlign: 'center',
    margin: 10,
    color: '#2d2926',
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
