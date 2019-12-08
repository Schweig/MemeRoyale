import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class TopPosts extends Component {
  constructor(props){
    super();
    this.state = {posts:[]}
    console.log(props);
    
  }
  componentDidMount(){
    this.getTopPosts()
  }
  async getData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
  async getTopPosts(){
   let response = await this.getData('http://localhost:3000/top');
   this.setState({posts:response})
  }
  render() {
      if(this.state.posts){      
    return (
      <Content style={{"height":"100%","width":"100%","backgroundColor":"#EEEEEE"}} padder>
          {this.state.posts.map((post,idx)=>{
            console.log(post)
              return(<Content key={idx} style={{"paddingTop":"10%"}}padder>
                <TouchableOpacity>
                <Text >{post.title}</Text>
                <Text style={{"fontSize":10}}>{post.username}</Text>
                <Text style={{"position":"absolute","right":0,"top":20}}>Score:{post.total}</Text>
                </TouchableOpacity>
                </Content>)
          })}
      </Content>
    )}else{
        <Content padder>
            Posts not loading.
        </Content>
    }
  }
}
