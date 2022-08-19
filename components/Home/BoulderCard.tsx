import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type BoulderProps = {
    grade: string,
    attempts: string
}

const BoulderCard = ({grade, attempts}: BoulderProps) => {
  return (
    <View>
      <Text style={styles.text}>Grade: {grade}</Text>
      <Text style={styles.text}>Attempts: {attempts}</Text>
    </View>
  )
}

export default BoulderCard

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})