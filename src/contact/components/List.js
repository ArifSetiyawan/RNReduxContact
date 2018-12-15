import React, { Component } from "react";
import { View } from "react-native";
import { Body, ListItem, Text, Left,CheckBox } from 'native-base';
import { withNavigation } from 'react-navigation';

class List extends Component {
    state = {
        selected: false,
        selectNone: this.props.selectNone
    }

    // RERENDER PROPS AND SET CHECKED TO FALSE
    componentDidUpdate(prevProps) {
        if (prevProps.toggle === false) {
            if (this.state.selected === true) {
                this.setState({ selected: false })
            }
        }
    }

    render() {
        return (
            <ListItem key={this.props.item.id} onPress={() => {
                this.props.navigation.navigate("EditContact", {
                    id: this.props.item.id,
                    text: this.props.item.text
                })
            }
            }>
                {this.props.toggle ?
                    <CheckBox color="blue" checked={this.state.selected}
                        onPress={
                            () => {
                                this.props.selectId(this.props.item)
                                this.setState({ selected: !this.state.selected })
                            }
                        } />
                    :
                    <View />

                }
            </ListItem>
        );
    }
}
export default withNavigation(List);