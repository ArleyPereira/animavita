import { createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';

import { Icon } from 'react-native-elements';

import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Settings from '~/pages/Settings';
import Messages from '~/pages/Messages';
import Chat from '~/pages/Chat';
import Notifications from '~/pages/Notifications';

import Filter from '~/pages/Filter';
import Adoption from '~/pages/Adoption';
import Details from '~/pages/Details';

const configs = {
  defaultNavigationOptions: {
    headerStyle: {
      height: 16 * 4,
      backgroundColor: '#FFFFFF',
      borderBottomColor: 'transparent',
      elevation: 0,
    },
    headerBackImage: <Icon name="ios-arrow-round-back" type="ionicon" color="#C5CCD6" size={40} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: 16,
      paddingRight: 16,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: 16,
    },
  },
};

const SignedOutRoutes = createStackNavigator({
  Login,
});

const MainStackNavigator = createStackNavigator({
  Home,
  Notifications,
  Messages,
  Chat,
  Settings,
}, configs);

const SignedInRoutes = createStackNavigator(
  {
    Main: {
      screen: MainStackNavigator,
      navigationOptions: {
        header: () => null,
      },
    },
    Filter,
    Adoption,
    Details: {
      screen: Details,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  configs,
  {
    mode: 'modal',
  },
);

export const createRootNavigator = (signedIn = false) => {
  return createAppContainer(createStackNavigator({
    SignedIn: { screen: SignedInRoutes },
    SignedOut: { screen: SignedOutRoutes },
  },
  {
    headerMode: 'none',
    initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }));
};
