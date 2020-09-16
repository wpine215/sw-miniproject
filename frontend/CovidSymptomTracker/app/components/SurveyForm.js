import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export class SurveyForm extends Component {
  constructor(props) {
    super(props);
  }

  handleForm = (symptoms) => {
    const email = this.props.email;
    const token = this.props.token;
    const id = this.props.id;

    axios
      .post(
        'https://us-central1-covid-miniproject-22326.cloudfunctions.net/app/api/survey/create',
        {
          symptoms,
          user_id: id,
          timestamp: Date.now(),
        },
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <Formik
        initialValues={{
          has_positive_contact: false,
          has_fever: false,
          has_cough: false,
          has_diff_b: false,
          has_s_loss: false,
          has_fatigue: false,
        }}
        validationSchema={Yup.object({
          has_positive_contact: Yup.boolean().required('Required'),
          has_fever: Yup.boolean().required('Required'),
          has_cough: Yup.boolean().required('Required'),
          has_diff_b: Yup.boolean().required('Required'),
          has_s_loss: Yup.boolean().required('Required'),
          has_fatigue: Yup.boolean().required('Required'),
        })}
        onSubmit={(values) => this.handleForm(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          setFieldValue,
        }) => (
          <View style={styles.viewContainer}>
            <CheckBox
              style={styles.checkbox}
              title="Have you come into contact with someone who has tested positive for COVID-19 in the past 14 days?"
              iconType="font-awesome"
              checkedIcon="check-square-o"
              uncheckedIcon="square-o"
              checkedColor="#CC0000"
              checked={values.has_positive_contact}
              onPress={() =>
                setFieldValue(
                  'has_positive_contact',
                  !values.has_positive_contact,
                )
              }
              value={values.has_positive_contact}
            />
            <Text>Are you experiencing any of the following?</Text>
            <CheckBox
              style={styles.checkbox}
              title="Fever of 100 F, or feeling unusually hot accompanied by shivering/chills"
              iconType="font-awesome"
              checkedIcon="check-square-o"
              uncheckedIcon="square-o"
              checkedColor="#CC0000"
              checked={values.has_fever}
              onPress={() => setFieldValue('has_fever', !values.has_fever)}
              value={values.has_fever}
            />
            <CheckBox
              style={styles.checkbox}
              title="New cough not related to chronic condition"
              iconType="font-awesome"
              checkedIcon="check-square-o"
              uncheckedIcon="square-o"
              checkedColor="#CC0000"
              checked={values.has_cough}
              onPress={() => setFieldValue('has_cough', !values.has_cough)}
              value={values.has_cough}
            />
            <CheckBox
              style={styles.checkbox}
              title="Difficulty breathing, Shortness of breath"
              iconType="font-awesome"
              checkedIcon="check-square-o"
              uncheckedIcon="square-o"
              checkedColor="#CC0000"
              checked={values.has_diff_b}
              onPress={() => setFieldValue('has_diff_b', !values.has_diff_b)}
              value={values.has_diff_b}
            />
            <CheckBox
              style={styles.checkbox}
              title="New loss of taste or smell"
              iconType="font-awesome"
              checkedIcon="check-square-o"
              uncheckedIcon="square-o"
              checkedColor="#CC0000"
              checked={values.has_s_loss}
              onPress={() => setFieldValue('has_s_loss', !values.has_s_loss)}
              value={values.has_s_loss}
            />
            <CheckBox
              style={styles.checkbox}
              title="Severe fatigue"
              iconType="font-awesome"
              checkedIcon="check-square-o"
              uncheckedIcon="square-o"
              checkedColor="#CC0000"
              checked={values.has_fatigue}
              onPress={() => setFieldValue('has_fatigue', !values.has_fatigue)}
              value={values.has_fatigue}
            />
            <Button onPress={handleSubmit} title="Submit" color="#CC0000" />
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    color: 'white',
  },
  checkboxContainer: {
    justifyContent: 'center',
  },
  checkboxText: {
    justifyContent: 'center',
  },
});
