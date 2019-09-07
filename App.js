/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { Provider, connect } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import LoginScreen from "./src/screens/LoginScreen"
import ContentFeed from "./src/components/ContentFeed"

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
let LoginContainer = connect(state => ({ count: state.count }))(LoginScreen);
let ContentContainer = connect(state => ({ count: state.count }))(
  ContentFeed
);
let store = createStore(combineReducers({ count: counter }));

let RootStack = createStackNavigator({
  LoginScreen: LoginContainer,
  ContentFeed: ContentContainer,
});

let Navigation = createAppContainer(RootStack);

const App = () => {
  return (
    <Provider store={store}>
        <Navigation />
      </Provider>
    );
};



export default App;
