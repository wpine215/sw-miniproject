import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Text, Button, Overlay} from 'react-native-elements';
import {Redirect} from 'react-router-native';

export class SurveyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }

  componentDidMount() {}

  closeModal = () => {
    this.setState({visible: false});
  };

  render() {
    if (!this.state.visible) {
      return <Redirect to={this.props.path} />;
    }
    return (
      <View>
        <Overlay
          overlayStyle={styles.overlay}
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

const styles = StyleSheet.create({
  overlay: {
    margin: 20,
    justifyContent: 'center',
    padding: 10,
  },
});
