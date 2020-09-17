import React, {Component} from 'react';
import {PreLoginView} from './../components/PreLoginView';
import {PostLoginView} from './../components/PostLoginView';
import {Text, Button} from 'react-native-elements';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  updateStatus = (loggedInStatus) => {
    this.setState({isLoggedIn: loggedInStatus});
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <PostLoginView
          firstName={this.props.location.state.userFirstName}
          email={this.props.location.state.userEmail}
          token={this.props.location.state.userToken}
          id={this.props.location.state.userID}
        />
      );
    }
    return <PreLoginView returnStatus={this.updateStatus} />;
  }
}
