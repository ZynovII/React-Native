import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const PlaceDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Details of Place</Text>
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
