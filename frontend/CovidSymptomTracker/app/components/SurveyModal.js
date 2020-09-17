import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon, Text, Button, Overlay} from 'react-native-elements';
import {Redirect} from 'react-router-native';

export class SurveyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }

  componentDidMount() {}

  closeModal = () => {
    console.log('Closing modal.');
    this.setState({visible: false});
  };

  render() {
    if (!this.state.visible) {
      return <Redirect to={this.props.path} />;
    }
    return (
      <View>
        <Overlay
          isVisible={this.state.visible}
          onBackdropPress={this.closeModal}>
          <View>
            <Text>{this.props.message}</Text>
            <Button
              type="clear"
              icon={<Icon name="close" type="font-awesome" color="#CC0000" />}
              onPress={this.closeModal}
            />
          </View>
        </Overlay>
      </View>
    );
  }
}
