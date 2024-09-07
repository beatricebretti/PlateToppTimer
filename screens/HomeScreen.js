import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TimerContext } from '../contexts/TimerContext';
import Header from '../components/Header';
import KitchenCounter from '../components/KitchenCounter';
import TimerButton from '../components/TimerButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const { timers } = useContext(TimerContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with App Name and Logo */}
      <Header />
      
      {/* Kitchen Counter with Circles */}
      <View style={styles.kitchenCounterContainer}>
        <KitchenCounter timers={timers} />
      </View>
      
      {/* Alarms Header */}
      <View style={styles.alarmsHeader}>
        <Text style={styles.alarmsText}>Alarms</Text>
      </View>

      {/* Timer Buttons */}
      <View style={styles.timerButtonsContainer}>
        <View style={styles.row}>
          <TimerButton
            time={timers[0] || null}
            plate="Plate 1"
            onPress={() => navigation.navigate('Set Timer', { plate: 1 })}
          />
          <TimerButton
            time={timers[1] || null}
            plate="Plate 2"
            onPress={() => navigation.navigate('Set Timer', { plate: 2 })}
          />
        </View>
        <View style={styles.row}>
          <TimerButton
            time={timers[2] || null}
            plate="Plate 3"
            onPress={() => navigation.navigate('Set Timer', { plate: 3 })}
          />
          <TimerButton
            time={timers[3] || null}
            plate="Plate 4"
            onPress={() => navigation.navigate('Set Timer', { plate: 4 })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#ececec',
  },
  kitchenCounterContainer: {
    paddingHorizontal: 1, // Add horizontal padding to the container
  },
  alarmsHeader: {
    marginVertical: 20,
    alignItems: 'flex-start', // Align the header to the left
  },
  alarmsText: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: 26,
  },
  timerButtonsContainer: {
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusted for even spacing
    marginBottom: 20,
  },
});

export default HomeScreen;




