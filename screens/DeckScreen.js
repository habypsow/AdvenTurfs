import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';



class DeckScreen extends Component {
  renderCard(park) {
    return (
      <Card title={park.name}>
        <View style={styles.detailWrapper}>
          <Text>{park.vicinity}</Text>
          <Text>{park.rating}</Text>
        </View>
    
      </Card>
    )
  }
  renderNoMoreCards() {
    return (
      <Card title="No more parks">
      </Card>
    );
  }

  render() {
    return (
      <View>
      <Swipe
      data={this.props.parks}
      renderCard={this.renderCard}
      renderNoMoreCards={this.renderNoMoreCards}
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
  return { parks: parks.results }
}

export default connect(mapStateToProps)(DeckScreen);
