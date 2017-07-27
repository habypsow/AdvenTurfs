import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import { AppLoading } from 'expo';

const SLIDE_DATA = [
  { text: 'W E L C O M E', color: '#cc0099' },
  { text: "Let's Begin!  Please Log In With Facebook, Then Set Your Location.." , color: '#009688' }
];

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
  AsyncStorage.removeItem('fb_token');
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    this.props.navigation.navigate('map');
    this.setState({ token });
  } else {
    this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
    <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    );
  }
}

export default WelcomeScreen;
