import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import SetTimerScreen from '../screens/SetTimerScreen';
import OvenTimerScreen from '../screens/OvenTimerScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TimerProvider } from '../contexts/TimerContext'; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <TimerProvider>
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="PlateToppTimer" 
              component={HomeScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="OvenTimerScreen" 
              component={OvenTimerScreen} 
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Set Timer" 
              component={SetTimerScreen} 
              options={{ headerShown: false }}
            />
      </Stack.Navigator>
    </SafeAreaProvider>
    </TimerProvider>
  );
}