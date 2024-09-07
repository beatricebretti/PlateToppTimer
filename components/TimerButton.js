import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TimerButton = ({ time, plate, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.plateText}>{`${plate}`}</Text>
      <TouchableOpacity style={styles.timerButton} onPress={onPress}>
        <Text style={styles.timerText}>
          {time ? formatTime(time) : "+"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150, // Ensure the container has a fixed width
    alignItems: 'flex-start', // Align children to the right
    margin: 0,
  },
  plateText: {
    fontSize: 18,
    marginBottom: 5, // Space between text and button
    textAlign: 'right', // Align text to the right
  },
  timerButton: {
    backgroundColor: '#ffffff',
    width: 150,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2, // Optional: Add a border to the button
    borderColor: '#ddd', // Optional: Border color

    // Shadow properties
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 3 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius

    // Elevation for Android
    elevation: 5,
  },
  timerText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default TimerButton;


