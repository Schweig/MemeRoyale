import React, {Component} from 'react';
import {StyleSheet, View, Image, AsyncStorage} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {Form, Item, Icon, Input, Label, Text, Content, Header, Left, Right, Button} from 'native-base';
import ProfileImage from '../components/ProfileImage';
import {postRequest, getRequest} from '../utils/network';
import ImagePicker from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RNPhotoEditor} from 'react-native-photo-editor';
export default class ProfileContent extends Component {
  constructor(props) {
    super();
    this.state ={
      profile: 0,
      disabled: true,
    };
  }
  async getProfile() {
    const token = await AsyncStorage.getItem('userToken');
    const response = await postRequest('http://localhost:3000/profile/me', {user: token});
    const resJson = await response.json();
    this.setState({profile: resJson, profileCopy: resJson});
  }
  async componentDidMount() {
    this.getProfile();
  }
  openImagePicker() {
    ImagePicker.showImagePicker( (response) => {
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
          onDone: ()=>{
            console.log(source.uri)
            CameraRoll.saveToCameraRoll(source.uri, 'photo');
            this.setState((prevState)=>{
              prevState.profileCopy.picture = source.uri;
              return prevState;
            });
          },
        });
      }
    });
  }

  render() {
    console.log(this.state);
    if (this.state.profile) {
      const profile = this.state.profileCopy;
      return (
        <Content>
          <Header>
            <Left>

            </Left>
            <Content></Content>
            <Right>
              <Button onPress={()=>{
                this.setState((prevState)=> {
                  prevState.disabled = !prevState.disabled;
                  return prevState;
                },
                )
                ;
              }}></Button>
            </Right>
          </Header>
          <TouchableOpacity onPress={()=>{
            this.openImagePicker()
            ;
          }}>
            <ProfileImage url={profile.picture} style={styles.profilePictureContainer}></ProfileImage>
          </TouchableOpacity>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input disabled={this.state.disabled} placeholder='Disabled Textbox' value={profile.username} onChangeText={(text) =>{
                this.setState((prevState) => {
                  const profileCopy = Object.assign({}, prevState.profileCopy);
                  profileCopy.username = text;
                  return {profileCopy};
                })
                ;
              }}/>
            </Item>
            <Item stackedLabel >
              <Label>Email</Label>
              <Input disabled={this.state.disabled} placeholder='Disabled Textbox' value={profile.email} onChangeText={(text) =>{
                this.setState((prevState) => {
                  const profileCopy = Object.assign({}, prevState.profileCopy);
                  profileCopy.email = text;
                  return {profileCopy};
                })
                ;
              }}/>
            </Item>
            <Item stackedLabel>
              <Label>Level</Label>
              <Input disabled={this.state.disabled} placeholder='Disabled Textbox' value={profile.level}/>
            </Item>
            <Item stackedLabel>
              <Label>Birthday</Label>
              <Input disabled={this.state.disabled} placeholder='Disabled Textbox' value={this.state.profile.birthday}/>
            </Item>
          </Form>
        </Content>
      );
    } else {
      return (<Text>Smth</Text>);
    }
  }
}
const styles = StyleSheet.create({
  profilePictureContainer: {
    paddingTop: '20%',
  },
});
