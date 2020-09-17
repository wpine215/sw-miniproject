import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import {SymptomList} from './SymptomList';
import axios from 'axios';

export class TrackerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gotResults: false,
      displayResults: false,
      results: [],
      timestamps: [],
      dates: [],
      chosenResults: {},
    };
  }

  componentDidMount() {
    this.getSymptoms();
  }

  getSymptoms = () => {
    let resp = {};
    const userID = this.props.userID;
    axios
      .get(
        'https://us-central1-covid-miniproject-22326.cloudfunctions.net/app/api/surveys/',
      )
      .then((response) => {
        // handle success
        this.setState({gotResults: true});
        resp = response.data;
        const uniqueResults = resp.filter((a) => a.user_id === userID);
        const uniqueTimes = uniqueResults.map((a) => a.timestamp);
        const uniqueDates = uniqueTimes.map((a) => this.convertToDate(a));
        this.setState({
          results: uniqueResults,
          timestamps: uniqueTimes,
          dates: uniqueDates,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  convertToDate = (timestamp) => {
    let time = new Date(timestamp);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    // append a zero to single-digit dates and months
    if (day.toString().length === 1) {
      day = '0' + day;
    }
    if (month.toString().length === 1) {
      month = '0' + month;
    }
    let date = '' + year + '-' + month + '-' + day;
    return date;
  };

  handleDateChange = (date) => {
    const idx = this.state.dates.indexOf(date);
    if (idx > -1) {
      const res = this.state.results[idx].symptoms;
      this.setState({displayResults: true, chosenResults: res});
    } else {
      this.setState({
        displayResults: false,
        chosenResults: 'There are no results for the chosen date.',
      });
    }
  };

  render() {
    if (this.state.gotResults) {
      let today_date = this.convertToDate(Date.now());
      return (
        <View style={styles.container}>
          <Text>Choose a date below to view that date's survey results.</Text>
          <DatePicker
            style={styles.datepicker}
            date={today_date}
            onDateChange={(date) => {
              this.handleDateChange(date);
            }}
          />
          <SymptomList
            display={this.state.displayResults}
            results={this.state.chosenResults}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
          <Button type="clear" loading />
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
  datepicker: {
    width: 200,
  },
});
