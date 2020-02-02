/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider, connect} from 'react-redux';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import {createStore, combineReducers} from 'redux';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ContentFeed from './src/components/ContentFeed';
import AuthLoading from './src/screens/AuthLoading';
import TopScreens from './src/screens/TopScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CreatorScreen from './src/screens/CreatorScreen';
import auth from './src/redux/auth';

const LoginContainer = connect((state) => ({auth}))(LoginScreen);
const SignUpContainer = connect((state) => ({auth}))(SignUpScreen);
const ContentContainer = connect((state) => ({auth}))(ContentFeed);
const TopContainer = connect((state) => ({auth}))(TopScreens);
const ProfileContainer = connect((state)=>({auth}))(ProfileScreen);
const CreatorContainer = connect((state)=>({auth}))(CreatorScreen);
const store = createStore(combineReducers({auth}));

const appTabs = createBottomTabNavigator({
  ContentFeed: ContentContainer,
  Top: TopContainer,
  Competitions: LoginContainer,
  Creator: CreatorContainer,
});
const authStack = createStackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SignUp: SignUpContainer,
  Login2: LoginContainer,
});
const appDrawer = createDrawerNavigator({
  App: appTabs,
  Profile: ProfileContainer,
});
const RootStack = createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      Auth: authStack,
      App: appDrawer,
    },
    {
      initialRouteName: 'AuthLoading',
    },
);


const Navigation = createAppContainer(RootStack);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
