import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddBoulder = ({setOpenModal}: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => setOpenModal(true)}
        style={styles.addBoulderButton}
      >
          <Text style={styles.addBoulderText}>Add Session</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddBoulder

const styles = StyleSheet.create({
    addBoulderButton: {
        backgroundColor: '#507DBC',
        borderRadius: 5,
        padding: 5
      },
    
      addBoulderText: {
        color: 'white'
      }
})