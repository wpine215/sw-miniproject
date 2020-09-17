import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';

export class SymptomList extends Component {
  constructor(props) {
    super(props);
  }

  boolToText = (symptom) => {
    if (this.props.results[symptom]) {
      return 'Yes';
    } else {
      return 'No';
    }
  };

  render() {
    if (this.props.display) {
      return (
        <View style={styles.container}>
          <ListItem bottomDivider style={styles.list_item}>
            <ListItem.Content>
              <ListItem.Title>
                Had you come into contact with someone who tested positive for
                COVID-19?
              </ListItem.Title>
              <ListItem.Subtitle>
                {this.boolToText('has_positive_contact')}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider style={styles.list_item}>
            <ListItem.Content>
              <ListItem.Title>Did you have a fever?</ListItem.Title>
              <ListItem.Subtitle>
                {this.boolToText('has_fever')}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider style={styles.list_item}>
            <ListItem.Content>
              <ListItem.Title>Did you have a cough?</ListItem.Title>
              <ListItem.Subtitle>
                {this.boolToText('has_cough')}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider style={styles.list_item}>
            <ListItem.Content>
              <ListItem.Title>
                Did you have difficulty breathing/shortness of breath?
              </ListItem.Title>
              <ListItem.Subtitle>
                {this.boolToText('has_diff_b')}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider style={styles.list_item}>
            <ListItem.Content>
              <ListItem.Title>Did you have severe fatigue?</ListItem.Title>
              <ListItem.Subtitle>
                {this.boolToText('has_fatigue')}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider style={styles.list_item}>
            <ListItem.Content>
              <ListItem.Title>
                Did you lose your sense of smell/taste?
              </ListItem.Title>
              <ListItem.Subtitle>
                {this.boolToText('has_s_loss')}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>No results for this date.</Text>
        </View>
      );
    }
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
  list_item: {
    width: 300,
  },
});
