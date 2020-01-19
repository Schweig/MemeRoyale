import React, {Component} from 'react';
import {StyleSheet, AsyncStorage} from 'react-native';
import {Content, Form, Item, Input, Label, Button, Text} from 'native-base';
export default class SignUpForm extends Component {
  constructor(props) {
    super();
    this.state = {error: ''};
  }
  submitForm() {
    if (this.state.password !== this.state.confirmPass) {
      this.setState({error: 'Passwords don\'t match'});
      return;
    }

    console.log(this.state);
    this.props.navigation.navigate('Login2', this.state);
  }

  render() {
    return (
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input onChangeText={(text) => this.setState({username: text})}/>
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} onChangeText={(text) => this.setState({password: text})}/>
          </Item>
          <Item floatingLabel last>
            <Label>Confirm Password</Label>
            <Input secureTextEntry={true} onChangeText={(text) => this.setState({confirmPass: text})} />
          </Item>
          <Text style={styles.error}>{this.state.error? this.state.error:''}</Text>
          <Button style={{marginTop: 20, marginHorizontal: 10}} onPress={()=>{
            this.submitForm();
          }} block light>
            <Text>Sign Up</Text>
          </Button>
        </Form>

      </Content>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
});
