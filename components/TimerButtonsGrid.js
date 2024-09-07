import React from 'react';
import { View, StyleSheet } from 'react-native';
import TimerButton from './TimerButton'; // Adjust path as needed

const TimerButtonsGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TimerButton plate={1} onPress={() => {}} />
        <TimerButton plate={2} onPress={() => {}} />
      </View>
      <View style={styles.row}>
        <TimerButton plate={3} onPress={() => {}} />
        <TimerButton plate={4} onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row', // Align buttons horizontally
  },
});

export default TimerButtonsGrid;
