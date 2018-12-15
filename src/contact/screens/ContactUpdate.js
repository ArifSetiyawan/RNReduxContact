import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import TextInput from '../components/redux-form/TextInput';
import { editdata } from '../../publics/redux/actions/contact';

import uuidv1 from 'uuid';
class ContactUpdate extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.initialize({
            name    :this.props.navigation.getParam('name'),
            address :this.props.navigation.getParam('address')

        })
    }

    handleUpdate = (value) => {
        const id = this.props.navigation.getParam('id')
        const name = value.name
        const address = value.address
        const data = {
            id :id,
            name :name,
            address :address
        }
        this.props.dispatch(editdata(data))
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
                    title="UPDATE CONTACT"
                    onPress={this.props.handleSubmit(this.handleUpdate)}
                />
            </View>
        );
    }
}

export default reduxForm({
    form: 'profile',
})(connect()(ContactUpdate));

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
