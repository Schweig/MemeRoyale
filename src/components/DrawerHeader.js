import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'native-base';
export default class DrawerHeader extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View style={styles.bottom}>
        <View style={styles.container}>
          <Button onPress= {()=>{
            this.props.navigation.openDrawer()
            ;
          }} style={styles.left}>
            <Text>left</Text>
          </Button>
          <View style={styles.center}></View>
          <Button style={styles.right}>
            <Text>right</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    margin: 25,
    borderRadius: 0,
  },
  center: {
    flex: 3,
  },
  right: {
    flex: 1,
    margin: 25,
  },
  bottom: {
    height: '15%',
    flexDirection: 'column-reverse',
  },

});
