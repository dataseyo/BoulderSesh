import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

type Props = {
    navigation: any,
    route: any,
    boulder: BoulderProps[]
}

type BoulderProps = {
    grade: Number,
    attempts: Number,
    RPE: Number,
    name?: String
}

const SessionInstance = ({navigation, route} : Props) => {
    const [boulders, setBoulders] = useState(route.params.boulder)

  return (
    <View style={styles.sessionInstanceView}>
      <Text>SessionInstance</Text>
      <Text style={styles.sessionInstanceTitle}>{route.params.name}</Text>
        <Text>{route.params.id}</Text>
        <View style={styles.boulderView}>
            <Text style={styles.sessionInstanceText}>Boulders: {JSON.stringify(boulders)}</Text>
        </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Sessions')}
        style={styles.backButton}
      >
          <Text style={styles.sessionInstanceText}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SessionInstance

const styles = StyleSheet.create({
    sessionInstanceView : {
        display: 'flex',
        flexDirection: 'column',
        margin: 10
    },

    sessionInstanceTitle: {
        fontSize: 30,
        color: 'white'
    },

    sessionInstanceText: {
        color: 'white'
    },

    boulderView: {

    },

    backButton: {
        display: 'flex',
        width: 50,
        height: 25,
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
})