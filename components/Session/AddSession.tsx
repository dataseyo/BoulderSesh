import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    setSessions: React.Dispatch<React.SetStateAction<{
        id: number;
        name: string;
    }[]>>,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddSession = ({setSessions, setOpenModal}: Props) => {
    

  return (
    <View>
      <TouchableOpacity
        onPress={() => setOpenModal(true)}
      >
          <Text>Add Session</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddSession

const styles = StyleSheet.create({})