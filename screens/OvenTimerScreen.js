import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TimerContext } from '../contexts/TimerContext';
import Header from '../components/Header'; // Reuse the same header
import KitchenCounter from '../components/KitchenCounter'; // Reuse KitchenCounter for consistency
import TimerButton from '../components/TimerButton';


const OvenTimerScreen = () => {
  const { timers } = useContext(TimerContext);
  const { ovenTimer } = useContext(TimerContext);

  // Convert the ovenTimer into the format needed
  const formatOvenTimer = (time) => {
    if (!time) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      
      <View style={styles.counterContainer}>
        <View style={styles.ovenCounter}>
          <Text style={styles.timerText}>
            {formatOvenTimer(ovenTimer)}
          </Text>
        </View>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ececec',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  ovenCounter: {
    width: 300,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 4,
  },
  timerText: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusted for even spacing
    marginBottom: 20,
  },
});

export default OvenTimerScreen;

