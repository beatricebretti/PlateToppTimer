import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TimerContext } from '../contexts/TimerContext';
import Header from '../components/Header'; // Reuse the same header
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
    <View style={styles.container}>
      <Header />
      
      {/* Oven Timer */}
      <View style={styles.ovenCounter}>
        {/* Oven Buttons inside the oven counter */}
        <View style={styles.ovenButtonsContainer}>
          <View style={styles.ovenButton} />
          <View style={styles.ovenButton} />
          <View style={styles.ovenButton} />
          <View style={styles.ovenButton} />
        </View>
        
        <View style={styles.innerBorder}>
          {/* Gray Bar */}
          <View style={styles.grayBar} />
          
          {/* Timer Text */}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ececec',
  },
  ovenCounter: {
    width: 350,
    height: 280,
    padding: 0,
    borderRadius: 30,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#252525', // Outer border color
    borderWidth: 3,
  },
  innerBorder: {
    width: '95%',
    height: '70%', // Reduced height to make room for buttons
    borderRadius: 30,
    backgroundColor: '#252525',
    borderColor: '#d9d9d9',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  grayBar: {
    width: '60%',
    height: 10, // Height of the gray bar
    backgroundColor: '#bfbfbf', // Gray color for the bar
    borderRadius: 5, // Rounded edges for the bar
    marginBottom: 70, // Space between the bar and the timer
  },
  ovenButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%', // Adjust width to position the buttons
    height: '20%', // Adjust height to fit the buttons above the timer
    marginBottom: 10, // Space between buttons and timer
  },
  ovenButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#252525',
  },
  timerText: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
  },
  alarmsHeader: {
    marginVertical: 20,
    alignItems: 'flex-start',
  },
  alarmsText: {
    color: '#252525',
    fontWeight: 'bold',
    fontSize: 26,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default OvenTimerScreen;
