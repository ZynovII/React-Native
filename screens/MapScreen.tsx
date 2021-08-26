import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Google Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
