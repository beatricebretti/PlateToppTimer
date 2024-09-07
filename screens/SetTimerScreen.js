import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TimerContext } from '../contexts/TimerContext';

const SetTimerScreen = ({ route, navigation }) => {
  const { plate } = route.params;
  const { startTimer } = useContext(TimerContext);
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');

  const saveTimer = () => {
    const duration = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds);
    startTimer(plate - 1, duration); // plate - 1 because arrays are zero-indexed
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Timer for Plate {plate}</Text>
      <View style={styles.timeInput}>
        <TextInput 
          style={styles.input} 
          keyboardType="numeric" 
          value={hours} 
          onChangeText={setHours} 
          placeholder="Hours" 
        />
        <Text>:</Text>
        <TextInput 
          style={styles.input} 
          keyboardType="numeric" 
          value={minutes} 
          onChangeText={setMinutes} 
          placeholder="Minutes" 
        />
        <Text>:</Text>
        <TextInput 
          style={styles.input} 
          keyboardType="numeric" 
          value={seconds} 
          onChangeText={setSeconds} 
          placeholder="Seconds" 
        />
      </View>
      <Button title="Save Timer" onPress={saveTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  timeInput: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
    width: 50,
    textAlign: 'center',
  },
});

export default SetTimerScreen;

