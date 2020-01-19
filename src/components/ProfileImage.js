import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
export default class ProfileImage extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.url}}
          // borderRadius style will help us make the Round Shape Image
          style={{width: 200, height: 200, borderRadius: 200 / 2}}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    paddingTop: '15%',
  },
});
