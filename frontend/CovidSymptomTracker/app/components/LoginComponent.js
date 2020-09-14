import React, {Component, Alert} from 'react';
import {Button} from 'react-native-elements';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {userInfo: '', isSigninInProgress: false, loggedIn: false};
  }

  onSignInSuccess = () => {
    console.log(this.state.userInfo);
    this.setState({isSigninInProgress: true});
  };

  signIn = async () => {
    try {
      // const userInfo = await GoogleSignin.signIn();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      // this.setState({userInfo: userInfo});
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
      console.log('Sign in in progress.');
      // this.onSignInSuccess();
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        alert('Sign-in in progress');
      } else {
        // some other error happened
        alert(error);
      }
    }
  };

  render() {
    GoogleSignin.configure({
      webClientId:
        '594841799387-r9jrfsutki0ddoke9pp4cgs0bdcc3qef.apps.googleusercontent.com',
      hostedDomain: '',
    });

    return (
      <GoogleSigninButton
        style={{width: 192, height: 60}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this.signIn}
        disabled={this.state.isSigninInProgress}
      />
    );
  }
}
