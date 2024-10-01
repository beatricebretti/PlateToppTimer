import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TimerContext } from '../contexts/TimerContext';

const TimerButton = ({ time, plate, onPress }) => {
  const formatTime = (time) => {
      if (!time) return '00:00'; 
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
      <View style={styles.buttonContainer}>
          <Text style={styles.plateText}>{plate}</Text>
          <TouchableOpacity style={styles.timerButton} onPress={onPress}>
              <Text style={styles.timerText}>
                  {time ? formatTime(time) : '+'} 
              </Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    alignItems: 'flex-start',
    margin: 0,
  },
  plateText: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'right',
  },
  timerButton: {
    backgroundColor: '#ffffff',
    width: 150,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  timerText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default TimerButton;



