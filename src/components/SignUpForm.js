import React, { Component } from 'react';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';
export default class SignUpForm extends Component {
  constructor(props){
    super();
    console.log(props);
  }
  render() {
    return (
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </Item>
          <Item floatingLabel last>
            <Label>Confirm Password</Label>
            <Input secureTextEntry={true} />
          </Item>
          <Button style={{marginTop:20,marginHorizontal:10 }} onPress={()=>{this.props.navigation.navigate('Login2');}} block light>
            <Text>Sign Up</Text>
          </Button>
        </Form>

      </Content>
    );
  }
}
