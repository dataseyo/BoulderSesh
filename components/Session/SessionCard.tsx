import { StyleSheet, Text, View, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from 'react-native'
import React from 'react'

type BoulderProps = {
  grade: Number,
  attempts: Number,
  RPE: Number,
  name?: String
}

type Props = {
  id: number,
  name: string,
  boulders: BoulderProps[]
  navigation: any,
}

const SessionCard = (props: Props) => {
  return (
    <View style={styles.sessionCardView}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SessionInstance', {name: props.name, id: props.id, boulders: props.boulders})}
      >
        <Text style={styles.sessionCardTitle}>Session</Text>
        <Text style={styles.sessionCardText}>{props.name}</Text>
        <Text style={styles.sessionCardText}>{props.id}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SessionCard

const styles = StyleSheet.create({
  sessionCardView: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    minWidth: '80%',
    margin: 10,
    padding: 10,
    overflow: 'scroll'
  },

  sessionCardTitle: {
    
    color: 'white'
  },

  sessionCardText: {
    color: 'white'
  }
})