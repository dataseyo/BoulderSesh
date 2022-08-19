import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import About from './pages/About';
import Session from './pages/Session';
import Profile from './pages/Profile';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <BottomTabs.Navigator>
          <BottomTabs.Screen 
            name="Home" 
            component={Home} 
          />
          <BottomTabs.Screen name="About" component={About}/>
          <BottomTabs.Screen name="Session" component={Session}/>
          <BottomTabs.Screen name="Profile" component={Profile}/>
        </BottomTabs.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
