import React, { useContext } from 'react';
import { View, StyleSheet, Text, PanResponder } from 'react-native';
import { TimerContext } from '../contexts/TimerContext';
import { useNavigation } from '@react-navigation/native';

const KitchenCounter = ({ timers }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.kitchenCounter}>
        {timers.map((timer, index) => (
          <View key={index} style={styles.circle}>
            <Text style={styles.circleText}>
              {timer ? formatTime(timer) : `${index + 1}`} {/* Change here */}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const formatTime = (timer) => {
  if (!timer) return '00:00'; 
  const totalSeconds = (timer.minutes || 0) * 60 + (timer.seconds || 0); 
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; 
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    borderRadius: 30,
    padding: 0,
    height: 280,
    color: '#252525',
    borderWidth: 3,
  },
  kitchenCounter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 350,
    height: 280,
    alignItems: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: '#252525',
  },
  circleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#252525',
    textAlign: 'center',
  },
});

export default KitchenCounter;




  