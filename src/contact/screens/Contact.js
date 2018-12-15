import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList,TouchableOpacity,Alert } from 'react-native';
import axios from 'axios';
import { ListItem, Text, Body, Fab, Right,Left,Button,Icon,CheckBox } from 'native-base'

import { editdata, getdata } from '../../publics/redux/actions/contact';
import { deletedata } from '../../publics/redux/actions/contact';

class Contact extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        selectID:[],
        selectedNone:false,
        toggle: false,
        selected: false,
      }    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.toggle === false) {
        if (this.state.selected === true) {
            this.setState({ selected: false })
        }
    }
}

  toggleDel = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  selectID = id => {
    var index = this.state.selectID.indexOf(id);

    if (index === -1) {
      this.setState({ selectID: [...this.state.selectID, id] });
    } else {
      this.setState(state => {
        const selectID = state.selectID.filter(contacts => contacts !== id);
        return {
          selectID
        };
      });
    }
  };

  Deleteallcontact = () => {
    if (this.state.selectID.length === 0) {
      this.props.contact.data.map(contacts => {
        this.props.dispatch.deletedata(contacts);
      })
      this.toggleEdit()
    } else {
      this.state.selectID.map(contacts => {
        this.props.dispatch.deletedata(contacts);
        this.setState({ selectID: [], toggle: false, selected: true })
      })
    }
  }
  confirmAll() {
    Alert.alert(
      "Delete Contact",
      "Are you sure you want to delete All Contact?",
      [
        { text: 'YES', onPress: () => this.deleteAllnote() },
        { text: 'NO' }
      ]
    );
  }
  componentDidMount() {
    // this.props.dispatch(get())
    // .then(res => {
    //   alert('success')
    // })
    // .catch(err => {
    //   alert('err')
    // })
  }
  confirmContact(contact) {
    Alert.alert(
      "Delete Contact",
      "Are you sure you want to delete this Contact?",
      [
        { text: 'YES', onPress: () => this.props.dispatch(deletedata(contact)) },
        { text: 'NO' }
      ]
    );
  }
  renderItem = ({ item, index }) => {
    return (
      <ListItem key={index}>
        <CheckBox color="blue" checked={this.state.selected}
          onPress={
            () => {
              this.props.selectId(item.id)
              this.setState({ selected: !this.state.selected })
            }
          } />
        <Body>
          <Text>{item.name}</Text>
          <Text note>{item.address}</Text>
        </Body>
        <Right>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <TouchableOpacity style={{paddingRight:10}} onPress={() => this.confirmContact(item.id)}>
              <Icon active style={{color:"red",fontSize:25}} name="trash-o" type="FontAwesome" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => 
              this.props.navigation.navigate("ContactUpdate", {
                id: item.id,
                name: item.name,
                address: item.address
              })
            }>
              <Icon active style={{color:"#0965c6",fontSize:27}} name="edit" type="FontAwesome" />
            </TouchableOpacity>
          </View>
        </Right>
      </ListItem>
    )
  }

  handleCreate = () => {
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'ContactCreate'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.contact.data}
          renderItem={this.renderItem}
          keyExtractor={({id}, index) => index.toString()}
          
        />
        <Fab
          containerStyle={{ justifyContent: 'center', alignItems: 'center'}}
          style={{ backgroundColor: '#000'}}
          position="bottomRight"
          onPress={this.handleCreate}>
          <Icon name="plus" type="Feather" />
        </Fab>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  }
}

export default connect(mapStateToProps)(Contact);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  textCounter: {
    fontSize: 100
  },
  item: {
    padding: 20,
    borderBottomColor: '#bebebe',
    borderBottomWidth: 0.5
  }
});
