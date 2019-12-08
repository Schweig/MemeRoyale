import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity,ActivityIndicator,StatusBar,AsyncStorage } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardFlip from 'react-native-card-flip';

export default class ContentFeed extends Component {
  constructor() {
    super();
    this.state = { key: 1, loading: true };

  }
  componentDidMount() {
    AsyncStorage.getItem('userToken').then((token) => {
      console.log(token);
      this.setState({
        loading: false,
        token:token,
      });
      this.getFeed();
    });
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

  async getFeed() {
    try {
      let response = await this.postData('http://localhost:3000/feed', {
        user:
          this.state.token,
      });
      this.setState({ feed: response });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  async vote(post,direction) {
    try {
      let response = await this.postData('http://localhost:3000/vote', {
        user:
          this.state.token,
        post:post,
        type:direction,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let arr = [];
    if (this.state.feed) {
      arr = this.state.feed;
    }

    if (!this.state.loading) {
      return (
        <CardStack
          style={styles.content}
          disableTopSwipe={true}
          disableBottomSwipe={true}
          ref={swiper => {
            this.swiper = swiper;
          }}
        >
          {arr.map((item, index) => {
            return (
              <CardFlip
                style={styles.cardContainer}
                onSwipedRight={() => this.vote(item.id,1)}
                onSwipedLeft={() => this.vote(item.id,0)}
                key={index}
                ref={card => (this['card' + index] = card)}
              >
                <TouchableOpacity
                  style={[styles.card,styles.card1]}
                  onPress={() => this['card' + index].flip()}
                >
                  <Text>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.card,styles.card2]}
                  onPress={() => this['card' + index].flip()}
                >
                  <Image
                    style={{ width: '100%', height: 500 }}
                    source={{ uri: item.link }}
                  />
                </TouchableOpacity>
              </CardFlip>
            );
          })}
        </CardStack>
      );
    } else {
      return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: '100%',
  },
  cardContainer:{
    width: 320,
    height: 530,
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 320,
    height: 530,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderWidth: 4,
    borderRadius: 55,
    marginTop: -15,
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  },
});
