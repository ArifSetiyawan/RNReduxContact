import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../components/redux-form/TextInput';

class Chat extends React.Component {

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Field
          name="name"
          component={TextInput}
          placeholder="Name"
        />
        <Field
          name="address"
          component={TextInput}
          placeholder="Address"
        />
        <Field
          name="age"
          component={TextInput}
          placeholder="Age"
        />
        <Button
          title="Show Value"
          onPress={this.props.handleSubmit((value) => alert(JSON.stringify(value)))}
        />
      </View>
    );
  }
}

export default reduxForm({
  form: 'profile'
})(Chat);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCounter: {
    fontSize: 100
  }
});
