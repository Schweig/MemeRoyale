import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Content, Text, Card, CardItem, Right} from 'native-base';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {getRequest} from '../utils/network';

/**
 * Component holding the top 15 posts
 */
export default class TopPosts extends Component {
  constructor(props) {
    super();
    this.state = {posts: []};
    this.getTopPosts();
  }
  componentDidMount() {
    setInterval(()=>{
      this.getTopPosts();
    }, 60000);
  }
  async getTopPosts() {
    const response = await getRequest('http://localhost:3000/top');
    const responseJson = await response.json();
    this.setState({posts: responseJson});
  }
  render() {
    if (this.state.posts) {
      return (
        <Content padder>
          {this.state.posts.map((post, idx)=>{
            return (
              <Card key={idx} style={{height:800}}>
                <CardItem header>
                  <Text >{post.title}</Text>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: post.link}} style={{height: 600, width: null, flex: 1}}/>
                </CardItem>
                <CardItem footer>
                  <Text style={styles.right}>Score:{post.total}</Text>
                  <Right>
                    <Text style={styles.smallerText}>{post.username}</Text>
                  </Right>
                </CardItem>
              </Card>
            );
          })}
        </Content>
      );
    } else {
      <Content padder>
        <Text>Posts not loading.</Text>
      </Content>;
    }
  }
}
const lightblue = 'lightblue';
const grey = 'grey';
const styles = StyleSheet.create({
  right: {
    alignSelf: 'flex-end',

  },
  scoresContainer: {
    display: 'flex',

  },
  smallerText: {
    fontSize: 10,
  },
  postItem: {
    backgroundColor: grey,
    paddingTop: '10%',
  },

});
