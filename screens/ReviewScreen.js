import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';


class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Reviews",
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />
      },
    headerRight:
    <Button title="Settings"
    onPress={() => navigation.navigate('settings')}
    backgroundColor="rgba(0,0,0,0)"
    color="rgba(0,122,255,1)"/>
  });

renderLikedParks() {
  return this.props.likedParks.map(park => {
    const initialRegion = {
      longitude: park.geometry.location.lng,
      latitude: park.geometry.location.lat,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card title={park.name} key={park.id}>
        <View style={{ height: 200 }}>
          <MapView
            style={{ flex: 1 }}
            cacheEnabled={true}
            scrollEnabled={false}
            initialRegion={initialRegion}
          />
          <View style={styles.detailWrapper}>
            <Text style={styles.italics}>{park.name}</Text>
            <Text style={styles.italics}>{park.rating}</Text>
          </View>
          <Button title="Get Directions"
          backgroundColor="#03A9F4"
          onPress={() => Linking.openURL('https://maps.google.com/')}
          />
        </View>
      </Card>
    );
  });
}


  render() {
    return (
      <ScrollView>
        {this.renderLikedParks()}
      </ScrollView>
    );
  }
}

const styles = {
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  }
}

function mapStateToProps(state) {
  return { likedParks: state.likedParks };
}

export default connect(mapStateToProps)(ReviewScreen);
