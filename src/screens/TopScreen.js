/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import DrawerHeader from '../components/DrawerHeader';
import {
  Container,
} from 'native-base';
import TopPosts from '../components/TopPosts';
const TopScreen = (props) => {
  return (
    <Container>
      <DrawerHeader {...props}></DrawerHeader>
      <TopPosts {...props}></TopPosts>
    </Container>
  );
};

export default TopScreen;
