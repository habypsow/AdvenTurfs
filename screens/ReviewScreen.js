import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { phonecall } from 'react-native-communications';


class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Favorites",
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />
      },
    headerRight:
    <Button title="Settings"
    onPress={() => navigation.navigate('settings')}
    backgroundColor="rgba(0,0,0,0)"
    color="#03A9F4"/>
  });

renderLikedParks() {
  return this.props.likedParks.map(park => {
    const initialRegion = {
      longitude: park.longitude,
      latitude: park.latitude,
      latitudeDelta: 0.0002,
      longitudeDelta: 0.0025
    };

    return (
      <Card title={park.brewery.name}

       key={park.id}>
        <View style={{ height: 250 }}>
          <MapView
            style={{ flex: 1 }}
            cacheEnabled={false}
            scrollEnabled={false}
            initialRegion={initialRegion}
          />

          <View style={styles.detailWrapper}>
            <Button title="Website"
              backgroundColor="#03A9F4"
              iconRight
              raised
              icon={{ name: 'touch-app'}}
              onPress={() => Linking.openURL(park.website)}
            />
            <Button title="Contact"
              iconRight
              backgroundColor="#03A9F4"
              raised
              icon={{ name: 'phone'}}
              onPress={() => {
                phonecall(park.phone, true)
              }}
            />
          </View>
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
  detailWrapper: {
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 18,


  }
}

function mapStateToProps(state) {
  return { likedParks: state.likedParks };
}

export default connect(mapStateToProps)(ReviewScreen);
