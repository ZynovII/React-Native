import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const PlaceListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>List of Placeces</Text>
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
