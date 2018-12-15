import React, { Component } from 'react';
import { View, Text, TextInput as Input } from 'react-native';
import { Container,Content, Form, Item} from 'native-base';
export default class TextInput extends Component {
  render() {
    console.log(this.props)
    return (
          <Form style={{padding:10}}>
              <Input
                style={{ height: 40 }}
                placeholder={this.props.placeholder}
                onChangeText={this.props.input.onChange}
                value={this.props.input.value}
              />
          </Form>
    )
  }
}