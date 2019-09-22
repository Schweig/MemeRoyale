/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Provider, connect} from 'react-redux';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import {createStore, combineReducers} from 'redux';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ContentFeed from './src/components/ContentFeed';
import AuthLoading from './src/screens/AuthLoading';
import auth from './src/redux/auth';

let LoginContainer = connect(state => ({auth}))(LoginScreen);
let SignUpContainer = connect(state => ({auth}))(SignUpScreen);
let ContentContainer = connect(state => ({auth}))(ContentFeed);
//let CompetitionsContainer = connect(state => ({auth}))(ContentFeed);
//let CreatorContainer = connect(state => ({auth}))(ContentFeed);
//let SearchContainer = connect(state => ({auth}))(ContentFeed);
let store = createStore(combineReducers({auth}));

let appTabs = createBottomTabNavigator({
  ContentFeed: ContentContainer,
  Search: LoginContainer,
  Competitions: LoginContainer,
  Creator: LoginContainer,
});
let authStack = createStackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: () => ({
      header: null,
    }),
  },
  SignUp: SignUpContainer,
  Login2: LoginContainer,
});
let RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: authStack,
    App: appTabs,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

let Navigation = createAppContainer(RootStack);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
