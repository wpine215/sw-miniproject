import React, {Component} from 'react';
import {PreLoginView} from './../components/PreLoginView';
import {Text, Button} from 'react-native-elements';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }
  render() {
    // if (this.state.isLoggedIn){
    //  return <PostLoginView />;
    // }
    return <PreLoginView />;
  }
}
