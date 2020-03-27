import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import React from 'react';
import {View, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginScreen from './Components/Login';
import WelcomeScreen from './Components/Welcome';
import ButtonNavigation from './common/Button';
import SignUpScreen from './Components/SignUp';
import EmployeeList from './Components/EmployeeList';
import Pdf from './Components/Pdf';

const AppSwitchNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  ButtonNavigation: ButtonNavigation,
  Pdf: {
    screen: Pdf,
    navigationOptions: {
      header:null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null,
    },
  },
  Submit: {
    screen: EmployeeList,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppSwitchNavigator);
