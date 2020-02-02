/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {Container, Right, Left, Content, Button} from 'native-base';
import CreatorContent from '../components/CreatorContent';

const CreatorScreen = (props) => {
  return (
    <Container style={styles.full}>
      <CreatorContent></CreatorContent>
    </Container>
  );
};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    height: '100%',
  },
});
export default CreatorScreen;
