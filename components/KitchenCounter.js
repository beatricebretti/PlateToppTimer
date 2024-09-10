import React, { useContext } from 'react';
import { View, StyleSheet, Text, PanResponder } from 'react-native';
import { TimerContext } from '../contexts/TimerContext';
import { useNavigation } from '@react-navigation/native';

const KitchenCounter = ({ timers }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container} >
      <View style={styles.kitchenCounter}>
        {Array.from({ length: 4 }, (_, index) => (
          <View key={index} style={styles.circle}>
            <Text style={styles.circleText}>
              {timers[index] ? formatTime(timers[index]) : `${index + 1}`}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
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




  