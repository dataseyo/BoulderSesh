import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    navigation: any,
    route: any
}

const SessionInstance = ({navigation, route} : Props) => {
  return (
    <View>
      <Text>SessionInstance</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Sessions')}
      >
          <Text style={styles.name}>{route.params.name}</Text>
          <Text>{route.params.id}</Text>
          <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SessionInstance

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        color: 'black'
    }
})