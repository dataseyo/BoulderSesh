// external imports
import { StyleSheet, 
        Text, 
        View, 
        Modal, 
        TextInput, 
        TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationProp, ParamListBase } from '@react-navigation/core';

// native imports
import SessionCard from '../components/Session/SessionCard'
import AddSession from '../components/Session/AddSession'
import SessionScreen from '../components/Session/Session'
import SessionInstance from '../components/Session/SessionInstance'

const Stack = createNativeStackNavigator()

const Session = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Sessions' component={SessionScreen}/>
        <Stack.Screen name='SessionInstance' component={SessionInstance} />
      </Stack.Navigator> 
  )
}

export default Session

const styles = StyleSheet.create({
  sessionView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalContainer: {
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
  },

  modalView: {
    backgroundColor: 'black',
    padding: 8
  },

  modalTitle: {
    color: 'white',
    fontSize: 20
  },

  modalText: {
    color: 'white'
  },

  input: {
    backgroundColor: 'white'
  }
})