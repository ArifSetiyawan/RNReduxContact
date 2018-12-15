import React from 'react';
import { Icon } from 'native-base'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import Contact from '../../contact/screens/Contact';
import ContactCreate from '../../contact/screens/ContactCreate';
import ContactUpdate from '../../contact/screens/ContactUpdate';
import Chat from '../../contact/screens/Chat';
import Settings from '../../contact/screens/Settings';

const ContactStack = createStackNavigator({
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'Contact List'
    }
  },
  ContactCreate: {
    screen: ContactCreate,
    navigationOptions: {
      title: 'Create Contact'
    }
  },
  ContactUpdate: {
    screen: ContactUpdate,
    navigationOptions: {
      title: 'Update Contact'
    }
  }
})

const App = createBottomTabNavigator({
  ContactStack: {
    screen: ContactStack,
    navigationOptions: {
    title: "Contact",
    tabBarIcon: ({ tintColor }) => (
      <Icon style={{ color: tintColor }} type="Entypo" name="user" />
      )
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      title: "Chat",
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ color: tintColor }} type="Feather" name="message-circle" />
        )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Settings",
      tabBarIcon: ({ tintColor }) => (
        <Icon style={{ color: tintColor }} type="FontAwesome" name="gears" />
        )
    }
  }
},{
    tabBarOptions: {
    activeTintColor: '#0965c6',
    inactiveTintColor: 'black',
  }
});

const RootNavigator = createStackNavigator({
  App: {
    screen: App
  }
},
{
  headerMode: 'none'
});

export default createAppContainer(RootNavigator);