import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../components/Header';
import { TimerContext } from '../contexts/TimerContext';

const { width } = Dimensions.get('window'); 

const SetTimerScreen = ({ route, navigation }) => {
  const { plate } = route.params; 
  const { setTimerForPlate } = useContext(TimerContext);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleSetTimer = () => {
    // Ensure minutes and seconds are numbers
    const validMinutes = parseInt(minutes, 10);
    const validSeconds = parseInt(seconds, 10);

    setTimerForPlate(plate, validMinutes, validSeconds); 
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.headerTitle}>Set Timer for Plate {plate}</Text>

      <View style={styles.pickerContainer}>
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Minutes:</Text>
          <Picker
            selectedValue={minutes}
            onValueChange={(itemValue) => setMinutes(itemValue)}
            style={styles.picker}
          >
            {Array.from({ length: 60 }, (_, i) => (
              <Picker.Item key={i} label={`${i}`} value={i} />
            ))}
          </Picker>
        </View>
        <View style={styles.pickerWrapper}>
          <Text style={styles.pickerLabel}>Seconds:</Text>
          <Picker
            selectedValue={seconds}
            onValueChange={(itemValue) => setSeconds(itemValue)}
            style={styles.picker}
          >
            {Array.from({ length: 60 }, (_, i) => (
              <Picker.Item key={i} label={`${i}`} value={i} />
            ))}
          </Picker>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSetTimer}>
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
    paddingTop: 30
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




