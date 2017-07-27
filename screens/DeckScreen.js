import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';




class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Breweries',
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name="local-drink" size={30} color={tintColor} />
      }
  }

  renderCard(place) {

    const initialRegion = {
      longitude: place.longitude,
      latitude: place.latitude,
      latitudeDelta: 0.0002,
      longitudeDelta: 0.0015
    }
  console.log(place);
    return (
      <Card title={place.brewery.name}
      >
        <View style={{ height: 300 }}>
          <MapView
            showsBuildings={true}
            showsPointsOfInterest={true}
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={false}
            initialRegion={initialRegion}
            >

          </MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.textStyle}>
          {place.streetAddress}
          </Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.textStyle}>Events: Happy Hours</Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.textStyle}>
          {place.locationTypeDisplay}
          </Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.textStyle}>
            Beer Style: {(place.brewery.brandClassification).toUpperCase()}
          </Text>
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.textStyle}>Organic Brews Available</Text>
        </View>

      </Card>
    )
  }
  renderNoMoreCards() {
    return (
      <Card title="No More Brews">
        <Button
        title="Back to Map"
        large
        icon={{ name: 'my-location' }}
        backgroundColor='#03A9F4'
        onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
      <Swipe
      data={this.props.placess}
      renderCard={this.renderCard}
      renderNoMoreCards={this.renderNoMoreCards.bind(this)}
      onSwipeRight={place => this.props.likePlace(place)}
      keyProp="id"
      />
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontFamily: 'Cochin',
    textAlign: 'center',
    marginTop: 5
  },
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  }
}

function mapStateToProps({ places }) {
console.log(places)
  if (places.data.length === 0) {
    return { places: [] };
  } else if (places.data.description !== 'null') {
    return { places: places.data }
  }
}

export default connect(mapStateToProps, actions)(DeckScreen);
