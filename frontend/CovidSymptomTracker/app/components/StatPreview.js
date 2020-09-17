import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Button} from 'react-native-elements';
import {SurveyModal} from './SurveyModal';
import axios from 'axios';

export class StatPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      gotResults: false,
      USData: {},
      SuffolkData: {},
    };
  }

  componentDidMount() {
    this.getUSStats();
    this.getSuffolkStats();
  }

  getUSStats = () => {
    axios
      .get('https://covid19.mathdro.id/api/countries/USA')
      .then((response) => {
        this.setState({USData: response.data});
      })
      .catch((error) => {
        this.setState({isError: true});
        console.log(error);
      });
  };

  getSuffolkStats = () => {
    axios
      .get('https://covid19.mathdro.id/api/countries/USA/confirmed')
      .then((response) => {
        const suffolkResults = response.data.filter(
          (a) => a.combinedKey === 'Suffolk, Massachusetts, US',
        );
        this.setState({SuffolkData: suffolkResults, gotResults: true});
      })
      .catch((error) => {
        this.setState({isError: true});
        console.log(error);
      });
  };

  render() {
    let overlay;
    if (this.state.isError) {
      overlay = (
        <SurveyModal
          message="There was an error trying to receive the COVID-19 statistics. Please try again later."
          path="/track"
        />
      );
    } else {
      overlay = <View />;
    }
    if (this.state.gotResults) {
      return (
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>
              COVID-19 Statistics
            </Card.Title>
            <Card.Divider />
            <Text>USA</Text>
            <View style={styles.statContainer}>
              <View>
                <Text>Total Cases</Text>
                <Text>{this.state.USData.confirmed.value}</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View>
                <Text>Recovered</Text>
                <Text>{this.state.USData.recovered.value}</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View>
                <Text>Deaths</Text>
                <Text>{this.state.USData.deaths.value}</Text>
              </View>
            </View>
            <Card.Divider style={styles.horizontalDivider} />
            <Text>Suffolk County</Text>
            <View style={styles.statContainer}>
              <View>
                <Text>Total Cases</Text>
                <Text>{this.state.SuffolkData[0].confirmed}</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View>
                <Text>Recovered</Text>
                <Text>-</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View>
                <Text>Deaths</Text>
                <Text>{this.state.SuffolkData[0].deaths}</Text>
              </View>
            </View>
          </Card>
          {overlay}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>
              COVID-19 Statistics
            </Card.Title>
            <Card.Divider />
            <Text>Loading data...</Text>
            <Button type="clear" loading />
          </Card>
          {overlay}
        </View>
      );
    }
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
  cardContainer: {
    width: 350,
  },
  cardTitle: {
    color: '#2d2926',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  verticalDivider: {
    borderLeftWidth: 1,
    borderLeftColor: '#e1e8ee',
  },
  horizontalDivider: {
    margin: 15,
  },
  cardSectionTitle: {
    color: '#2d2926',
  },
});
