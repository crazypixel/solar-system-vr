import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-vr';

const MyHeader = ({currentPlanet}) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>The Solar System</Text>
    <Text style={styles.headerSubtitle}>{currentPlanet}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: 600,
    transform: [{translate: [-300, 260, 0]}]
  },
  headerTitle: {
    fontSize: 60,
    textAlign: 'center',
    color: '#fff'
  },
  headerSubtitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  }
});

export default MyHeader;