import React from 'react';
import {
  Text,
  View,
  Animated,
  VrButton,
  StyleSheet
} from 'react-vr';
import planets from '../data/planets';

export default class Menu extends React.Component {
  constructor(props) {
    super();

    this.state = {
      bounceValue: new Animated.Value(1),
      activePlanet: props.currentPlanet
    };
  }

  // a button to swap between planets
  planetButton(planet) {
    const {activePlanet} = this.state;
    const selected = activePlanet === planet;
    const scale = selected ? this.state.bounceValue : 1;
    const borderColor = selected ? 'purple' : '#fff';

    return (
      <VrButton key={`button-${planet}`}
                onClick={() => this.handleClick(planet)}>
        <Animated.View style={[styles.planetBtn, {
          transform: [{scale}], borderColor}]}>
          <Text style={styles.planetBtnLabel}>{planet}</Text>
        </Animated.View>
      </VrButton>
    );
  }

  handleClick(planet) {
    const {switchPlanet} = this.props;

    this.setState({activePlanet: planet}, () => {
      // bounce the button
      const btnConfig = {
        value: this.state.bounceValue,
        initial: 1.5,
        toValue: 1
      };

      this.bounce(btnConfig);

      // trigger parent - switchPlanet
      switchPlanet(planet);
    });
  }

  // bounce animation
  bounce({value, initial, toValue, friction = 1.5}) {
    value.setValue(initial);

    Animated.spring(
      value,
      {
        toValue,
        friction,
      }
    ).start();
  }

  render() {
    return (
      <View
        billboarding={'on'}
        style={styles.menu}>
        { Object.keys(planets).map((planet) =>
          this.planetButton(planet)) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    width: 400,
    height: 400,
    backgroundColor: 'transparent',
    position: 'absolute',
    layoutOrigin: [0, 0],
    transform: [
      {rotateY: -90},
      {translate: [400, 100, -350]}
    ],
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  planetBtn: {
    borderRadius: 10,
    width: 100,
    height: 100,
    borderColor: '#fff',
    borderWidth: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  planetBtnLabel: {
    color: '#fff',
    fontSize: 20
  }
});
