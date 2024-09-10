import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';
import { TimerContext } from '../contexts/TimerContext';

const { width } = Dimensions.get('window'); 

const SetTimerScreen = ({ route, navigation }) => {
  const { plate } = route.params;
  const { startTimer } = useContext(TimerContext);
  const [alarmName, setAlarmName] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const hoursOptions = Array.from({ length: 24 }, (_, i) => i);
  const minutesOptions = Array.from({ length: 60 }, (_, i) => i);
  const secondsOptions = Array.from({ length: 60 }, (_, i) => i);

  const saveTimer = () => {
    const duration = (hours * 3600) + (minutes * 60) + seconds;
    startTimer(plate - 1, duration); // plate - 1 because arrays are
    navigation.goBack();
  };
  

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerTitle}>Set alarm for plate {plate}</Text>
      <TextInput
        style={styles.input}
        placeholder="Alarm Name"
        value={alarmName}
        onChangeText={setAlarmName}
      />
      <View style={styles.pickerContainer}>
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Hours</Text>
          <Picker
            selectedValue={hours}
            style={styles.picker}
            onValueChange={(itemValue) => setHours(itemValue)}
          >
            {hoursOptions.map((hour) => (
              <Picker.Item key={hour} label={hour.toString()} value={hour} />
            ))}
          </Picker>
        </View>
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Minutes</Text>
          <Picker
            selectedValue={minutes}
            style={styles.picker}
            onValueChange={(itemValue) => setMinutes(itemValue)}
          >
            {minutesOptions.map((minute) => (
              <Picker.Item key={minute} label={minute.toString()} value={minute} />
            ))}
          </Picker>
        </View>
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Seconds</Text>
          <Picker
            selectedValue={seconds}
            style={styles.picker}
            onValueChange={(itemValue) => setSeconds(itemValue)}
          >
            {secondsOptions.map((second) => (
              <Picker.Item key={second} label={second.toString()} value={second} />
            ))}
          </Picker>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={saveTimer}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    paddingHorizontal: 20,
    backgroundColor: '#ececec',
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#252525',
    padding: 10,
    marginVertical: 20,
    width: '100%',
    textAlign: 'center',
    borderRadius: 7,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  pickerWrapper: {
    alignItems: 'center',
    width: 90, 
  },
  pickerLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  picker: {
    width: '100%',
    height: 150,
  },
  button: {
    backgroundColor: '#4894cb',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 70,
    width: 200,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'right', 
  },
});

export default SetTimerScreen;




