import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export const EventListScreen = () => {
  return (
    <View
      style={styles.container}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    >
      <Text>List of Events</Text>
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
