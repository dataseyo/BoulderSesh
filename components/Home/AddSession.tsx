import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddSession = ({setOpenModal}: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => setOpenModal(true)}
        style={styles.addSessionButton}
      >
          <Text style={styles.addSessionText}>Add Session</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddSession

const styles = StyleSheet.create({
  addSessionButton: {
    backgroundColor: '#507DBC',
    borderRadius: 5,
    padding: 5,
    width: '50%'
  },

  addSessionText: {
    color: 'white'
  }
})