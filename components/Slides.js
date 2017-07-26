import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;



class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
        title="START"
        raised
        large
        iconRight
        icon={{ name: 'touch-app'}}
        buttonStyle={styles.buttonStyle}
        onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
        key={slide.text}
        style={
          [styles.slideStyle,
            { backgroundColor: slide.color}
        ]}>
          <Text style={styles.textStyle}>{slide.text}
          </Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal style={{ flex: 1}}
        pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Cochin',
    textAlign: 'center',
    lineHeight: 40
  },
  buttonStyle: {
    marginTop: 35,
    backgroundColor: '#cc0099',


  }
}

export default Slides;
