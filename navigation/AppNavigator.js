import React from 'react';
import { createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SearchRoom from '../screens/SearchRoom';
import Chat from '../screens/Chat';
import SendHongBao from '../screens/SendHongBao';
import Login from '../screens/Login';
import Register from '../screens/Register';
const AppStack = createStackNavigator({
  Main: {
    screen:MainTabNavigator,
    navigationOptions:{
      headerBackTitle:'返回',
      header:null,
    }
  },
  SearchRoom,
  Chat,
  SendHongBao,
  
},{
  initialRouteName: 'Main',//Main
});

const AuthStack = createStackNavigator({
  Login,
  Register,
});
export default createAppContainer(
  createSwitchNavigator({
    AppStack,
    AuthStack,
  })
);
