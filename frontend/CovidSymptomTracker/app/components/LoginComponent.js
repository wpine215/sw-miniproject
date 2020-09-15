import React, {Component} from 'react';
import {Redirect} from 'react-router-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {userInfo: '', isSigninInProgress: false, isLoggedIn: false};
  }

  signIn = async () => {
    try {
      this.setState({isSigninInProgress: true});
      console.log('Sign in in progress.');
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo: userInfo});
      this.onSignInSuccess();
    } catch (error) {
      this.setState({isSigninInProgress: false});
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('Login flow canceled.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('Sign-in in progress.');
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };

  onSignInSuccess = () => {
    this.setState({isSigninInProgress: false, isLoggedIn: true});
    return (
      <Redirect
        to={{
          pathname: '/survey',
          state: {userInfo: this.state.userInfo},
        }}
      />
    );
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/survey" />;
    }
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
