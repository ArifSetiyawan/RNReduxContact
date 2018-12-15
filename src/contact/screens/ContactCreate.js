import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import TextInput from '../components/redux-form/TextInput';
import { create } from '../../publics/redux/actions/contact';

import uuidv1 from 'uuid';
class ContactCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSave = (value) => {
        const name = value.name
        const address = value.address
        const data = {
            id :uuidv1(),
            name :name,
            address :address
        }
        this.props.dispatch(create(data))
        this.props.dispatch({
            type: 'Navigation/POP'
        })
    }

    
    render() {
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
                <Button
                    color="#000"
                    title="SAVE CONTACT"
                    onPress={this.props.handleSubmit(this.handleSave)}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      contact: state.contact
    }
  }


export default reduxForm({
    form: 'profile',
})(connect(mapStateToProps)(ContactCreate));

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
