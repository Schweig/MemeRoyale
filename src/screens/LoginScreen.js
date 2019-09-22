/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import Svg, {G, Path} from 'react-native-svg';
import Background from '../../assets/loginscreen.svg';
const LoginScreen = props => {
  return (
    <Container>
      <Image
        source={require('../../assets/loginscreen.png')}
        style={{resizeMode: 'cover', position: 'absolute'}}
        width="100%"
        height="100%"
        position="absolute"
      />
      <Logo height="50%" width="50%" />
      <LoginForm {...props} />
    </Container>
  );
};

export default LoginScreen;
