import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet} from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import About from './pages/About';
import Session from './pages/Session';
import Profile from './pages/Profile';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#04080F',
    background: "#04080F",
    border: "#04080F"
  }
}

export default function App() {
  return (
      <NavigationContainer theme={NavTheme}>
        <StatusBar/>
        <BottomTabs.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#04080F"
            },
            headerTintColor: "white",
            tabBarStyle: {
              backgroundColor: "#04080F"
            },
            tabBarActiveTintColor: "#BBD1EA"
          }}
        >
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
