import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';




class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Parks',
    // tabBarIcon =
    //   ({ tintColor }) => ({
    //     return <Icon name="description" size={30} color={tintColor} />
    //   })
  }

  renderCard(park) {

    const initialRegion = {
      longitude: park.geometry.location.lng,
      latitude: park.geometry.location.lat,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }
  console.log("Heeeyyy" + this.props);
    return (
      <Card title={park.name}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={true}
            initialRegion={initialRegion}
            >

          </MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text>Location: {park.vicinity}</Text>
        </View>
        <View style={styles.detailWrapper}>
        <Text>Rating: {park.rating}</Text>
        </View>

      </Card>
    )
  }
  renderNoMoreCards() {
    return (
      <Card title="No More Parks">
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
      <View style={{ marginTop: 10 }}>
      <Swipe
      data={this.props.parks}
      renderCard={this.renderCard}
      renderNoMoreCards={this.renderNoMoreCards.bind(this)}
      onSwipeRight={park => this.props.likePark(park)}
      keyProp="id"
      />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

function mapStateToProps({ parks }) {
  if (parks.results.length === 0) {
    return { parks: [] };
  } else {
    return { parks: [parks.results[0]] }
  }
}

export default connect(mapStateToProps, actions)(DeckScreen);
