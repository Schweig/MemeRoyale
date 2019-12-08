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
import TopPosts from '../components/TopPosts';
const TopScreen = props => {
  return (
    <Container>
      <TopPosts></TopPosts>
    </Container>
  );
};

export default TopScreen;
