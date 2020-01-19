import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createAppContainer, 
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
 } from 'react-navigation';


import WelcomeScreen from './screens/WelcomeScreen';

import HomeScreen from './screens/HomeScreen'; 
import DetailScreen from './screens/DetailScreen';
import AddScreen from './screens/AddScreen'; 
import ProfileScreen from './screens/ProfileScreen'; 
import Setting1Screen from './screens/Setting1Screen';
import Setting2Screen from './screens/Setting2Screen';


export default class App extends React.Component {
  render() {
    const HomeStack = createStackNavigator({
      home: { screen: HomeScreen },
      detail: { screen: DetailScreen }
    });
    
    HomeStack.navigationOptons = ({ navigation }) => {
      return {
        tabBarVisible: (navigation.state.index === 0)
      };
    };

    const AddStack = createStackNavigator({
      add: { screen: AddScreen }
    });
    
    AddStack.navigationOptions = ({ navigation }) => {
      return {
        tabBarVisible: (navigation.state.index === -1)
      };
    };

    const ProfileStack = createStackNavigator({ 
      profile: { screen: ProfileScreen },
      setting1: { screen: Setting1Screen },
      setting2: { screen: Setting2Screen }
    });

    ProfileStack.navigationOptions = ({ navigation }) => {
      return {
        tabBarVisible: (navigation.state.index === 0)
      };
    };

    const MainTab = createBottomTabNavigator({
      homeStack: { screen: HomeStack },
      addStack: { screen: AddStack },
      profileStack: { screen: ProfileStack }
    });
    
    const NavigatorTab = createAppContainer(
      createSwitchNavigator({
        welcom: { screen: WelcomeScreen },
        main: { screen: MainTab }
      })
    );

    return (
      <View style={styles.container}>
        <NavigatorTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // ↓この文消さないと`react-navigation`が上手く動かず、画面真っ白になっちゃう
    //alignItems: 'center',
    justifyContent: 'center',
  },
});