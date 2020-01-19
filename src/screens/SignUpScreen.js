/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import Logo from '../components/Logo';
import SignUpForm from '../components/SignUpForm';
import {
  Container,
} from 'native-base';
const LoginScreen = (props) => {
  return (
    <Container>
      <Image
        source={require('../../assets/loginscreen.png')}
        style={styles.background}
        width="100%"
        height="100%"
        position="absolute"
      />
      <Logo height="50%" width="50%" />
      <SignUpForm {...props} />
    </Container>
  );
};
const styles = StyleSheet.create({
  background: {
    resizeMode: 'cover',
    position: 'absolute',
  },
});
export default LoginScreen;
