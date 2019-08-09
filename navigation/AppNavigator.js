import React from 'react';
import { createAppContainer,createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SearchRoom from '../screens/SearchRoom';
import Chat from '../screens/Chat';
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
},{
  initialRouteName: 'Chat',//Main
});
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    
    AppStack,
  })
);
