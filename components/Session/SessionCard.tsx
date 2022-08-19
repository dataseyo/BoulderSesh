import { StyleSheet, Text, View, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
  id: number,
  name: string,
  navigation: any
}

const SessionCard = (props: Props) => {
  return (
    <View style={styles.sessionCardView}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SessionInstance', {name: props.name, id: props.id})}
      >
        <Text>SessionCard</Text>
        <Text>{props.name}</Text>
        <Text>{props.id}</Text>
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
    borderColor: 'black',
    borderRadius: 5,
    minWidth: '80%',
    margin: 10,
    padding: 10,
    overflow: 'scroll'
  }
})