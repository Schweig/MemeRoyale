import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import CardFlip from "react-native-card-flip";

export default class ContentFeed extends Component {
  constructor() {
    super();
    this.state = { key: 1 };
  }
  async getFeed() {
    try {
      let response = await fetch("http://10.0.2.2:3000/feed");
      let responseText = await response.text();
      console.log(responseText);
      return responseText.movies;
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    //this.getFeed();
    var arr = [
      "https://www.clicktorelease.com/code/gif/1.gif",
      "https://www.clicktorelease.com/code/gif/2.gif"
    ];
    return (
      <CardStack
        style={styles.content}
        ref={swiper => {
          this.swiper = swiper;
        }}
      >
        {arr.map((uri, index) => {
          return (
            <CardFlip style={ styles.card } ref={ (card) => this['card' + index] = card } >
            <TouchableOpacity style={ styles.card } onPress={() => this['card' + index].flip()} ><Text>{uri}</Text></TouchableOpacity>
            <TouchableOpacity style={ styles.card } onPress={() => this['card' + index].flip()} ><Text>{uri}</Text></TouchableOpacity>
          </CardFlip>
          );
        })}
      </CardStack>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
    width: "100%",
    height: "100%"
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5
  },
  card1: {
    backgroundColor: "#FE474C"
  },
  card2: {
    backgroundColor: "#FEB12C"
  },
  label: {
    lineHeight: 400,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: 220,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: "rgb(246,190,66)",
    borderWidth: 4,
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#01df8a"
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#fd267d"
  }
});
