import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SetTimerScreen from '../screens/SetTimerScreen';
import OvenTimerScreen from '../screens/OvenTimerScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="OvenTimerScreen" component={OvenTimerScreen} />
    <Stack.Screen name="Set Timer" component={SetTimerScreen} />
  </Stack.Navigator>
);

export default AppNavigator;

