import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';
export default class LoginForm extends Component {
  constructor(props){
    super();
    console.log(props);
  }
  async postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  async authenticateUser(){
    const response = await (this.postData('http://10.0.2.2:3000/auth',{username:this.state.username,password:this.state.password}));

    await AsyncStorage.setItem('userToken',response.token);
    this.props.navigation.navigate('AuthLoading');
  }
  render() {
    return (
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input onChangeText={(text)=>{this.setState({'username':text});}} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input onChangeText={(text)=>{this.setState({'password':text});}}secureTextEntry={true} />
          </Item>
          <Button style={{marginTop:20,marginHorizontal:10 }} onPress={()=>{this.authenticateUser();}} block primary>
            <Text>Log In</Text>
          </Button>
        </Form>
        <Button style={{marginTop:20,marginHorizontal:10 }} onPress={()=>{this.props.navigation.navigate('SignUp');}} block light>
            <Text>Sign Up</Text>
          </Button>
      </Content>
    );
  }
}
