import React, {Component} from 'react';
import {StyleSheet, AsyncStorage, ScrollView} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import postRequest from '../utils/network';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Text,
  Content,
  Header,
  Left,
  Right,
  Button,
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import {RNPhotoEditor} from 'react-native-photo-editor';
export default class CreatorContent extends Component {
  constructor(props) {
    super();
    this.state = {
      profile: 0,
      disabled: true,
    };
  }
  openImagePicker() {
    ImagePicker.showImagePicker((response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        RNPhotoEditor.Edit({
          path: source.uri,
          onDone: () => {
            console.log(this);
            CameraRoll.saveToCameraRoll(source.uri, 'photo');
            this.setState((prevState) => {
              prevState.profileCopy.picture = source.uri;
              return prevState;
            });
          },
        });
      }
    });
  }
  openImageTemplate(url) {
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'jpg',
    })
        .fetch('GET', url)
        .then((res) => {
          const imgPath = res.path();
          console.log(`Cached in ${imgPath}`); // Caches successfully
          RNPhotoEditor.Edit({
            path: imgPath,
            onDone: () => {
              console.log('edited');
            },
          });
        });
  }

  render() {
    return (
      <Container>
        <Content style={styles.vert}>
          <Text>Text</Text>
          <ScrollView horizontal={true}>
            <Button
              onPress={() => {
                this.openImagePicker();
              }}>
              <Text>Meme Now</Text>
            </Button>
            <Button
              onPress={() => {
                this.openImageTemplate('https://www.meme-arsenal.com/memes/a4b15e0e49bea954c7fce9df617b7632.jpg');
              }}>
              <Text>Meme Now</Text>
            </Button>
            <Button
              onPress={() => {
                this.openImageTemplate('https://www.meme-arsenal.com/memes/a4b15e0e49bea954c7fce9df617b7632.jpg');
              }}>
              <Text>Meme Now</Text>
            </Button>
            <Button
              onPress={() => {
                this.openImageTemplate('https://www.meme-arsenal.com/memes/a4b15e0e49bea954c7fce9df617b7632.jpg');
              }}>
              <Text>Meme Now</Text>
            </Button>
            <Button
              onPress={() => {
                this.openImageTemplate('https://www.meme-arsenal.com/memes/a4b15e0e49bea954c7fce9df617b7632.jpg');
              }}>
              <Text>Meme Now</Text>
            </Button>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  profilePictureContainer: {
    paddingTop: '20%',
  },
  vert: {
    flexDirection: 'column-reverse',
    flex: 1,
    backgroundColor: '#0000FF',
  },
});
