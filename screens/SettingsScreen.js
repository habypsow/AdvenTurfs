import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedParks } from '../actions';


class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Button
        title="Reset Favorites List"
        large
        icon={{ name: 'delete-forever' }}
        backgroundColor="#f44336"
        onPress={this.props.clearLikedParks}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedParks })(SettingsScreen);
