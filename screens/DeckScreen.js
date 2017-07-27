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
    tabBarIcon:
      ({ tintColor }) => {
        return <Icon name="description" size={30} color={tintColor} />
      }
  }

  renderCard(park) {

    const initialRegion = {
      longitude: park.longitude,
      latitude: park.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }
  console.log(park);
    return (
      <Card title={park.brewery.name}>
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
          <Text>Location: {park.streetAddress}</Text>
        </View>
        <View style={styles.detailWrapper}>
        <Text>{park.brewery.description}</Text>
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
console.log(parks)
  if (parks.data.length === 0) {
    return { parks: [] };
  } else if (parks.data.description !== 'null') {
    return { parks: parks.data }
  }
}

export default connect(mapStateToProps, actions)(DeckScreen);
