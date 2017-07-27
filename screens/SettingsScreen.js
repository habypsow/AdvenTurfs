import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedParks } from '../actions';


class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Reviews",
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />
      }
    });

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
