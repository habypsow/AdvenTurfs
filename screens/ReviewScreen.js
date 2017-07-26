import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';


class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Reviews",
    headerRight:
    <Button title="Settings"
    onPress={() => navigation.navigate('settings')}
    backgroundColor="rgba(0,0,0,0)"
    color="rgba(0,122,255,1)"/>
  });



  render() {
    return (
      <View>
      
      </View>
    );
  }
}
function mapStateToProps(state) {
  return { likedParks: state.likedParks };
}

export default connect(mapStateToProps)(ReviewScreen);
