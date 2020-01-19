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
import {
  Container, Right, Left, Content,
} from 'native-base';
import ProfileImage from '../components/ProfileImage';
import ProfileContent from '../components/ProfileContent';
const ProfileScreen = (props) => {
  return (
    <Container>
      <Content>
        <ProfileContent></ProfileContent>
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  background: {
    resizeMode: 'cover',
    position: 'absolute',
  },
  profilePictureContainer: {
    paddingTop: '20%',
  },
});
export default ProfileScreen;
