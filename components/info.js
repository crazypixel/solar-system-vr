import React from 'react';
import {
  Text,
  View,
  Animated,
  VrButton,
  StyleSheet
} from 'react-vr';
import planets from '../data/planets';

export default class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      tilesOpen: false,
    };
  }

  // planet textual description
  description(description) {
    return (
      <View>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    );
  }

  // info tiles for each planet - located on the left side
  tiles(info) {
    return (
      <View style={styles.tiles}>
        {info.map(({label, value}) => (
          <View style={styles.tile}>
            <Text style={styles.tileLabel}>{label}</Text>
            <Text style={styles.tileValue}>{value}</Text>
          </View>
        ))}
      </View>
    );
  }

  render() {
    const {currentPlanet} = this.props;
    const {tilesOpen} = this.state;

    return (
      <View
        billboarding={'on'}
        style={styles.info}>
        <View>
          <Text style={styles.infoTitle}>
            {currentPlanet}
          </Text>
        </View>

        {tilesOpen ? this.tiles(planets[currentPlanet].info) :
          this.description(planets[currentPlanet].description)}

        <VrButton
          onClick={() => this.setState({tilesOpen: !tilesOpen})}>
          <View style={styles.infoBtn}>
            <Text style={styles.infoBtnLabel}>MORE INFO</Text>
          </View>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 24,
    color: '#fff'
  },
  tiles: {},
  tile: {
    height: 40,
    backgroundColor: '#304FFE',
    margin: 5,
    padding: 10,
    flexDirection: 'row'
  },
  tileLabel: {
    flex: 7,
    fontSize: 20,
    color: '#fff'
  },
  tileValue: {
    flex: 3,
    textAlign: 'right',
    fontSize: 20,
    color: '#fff'
  },
  info: {
    width: 500,
    minHeight: 400,
    backgroundColor: 'transparent',
    position: 'absolute',
    layoutOrigin: [0, 0],
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 10,
    padding: 20,
    transform: [
      {rotateY: 90},
      {translate: [-300, 100, -850]}
    ]
  },
  infoTitle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  infoBtn: {
    width: '100%',
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 10,
    marginTop: 30
  },
  infoBtnLabel: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
  }
});