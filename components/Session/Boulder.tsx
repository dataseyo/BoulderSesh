import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type BoulderProps = {
    grade: Number,
    RPE: Number,
    name?: String
}

const Boulder = ({grade, RPE, name}: BoulderProps) => {
  return (
    <View>
      <Text>
          
      </Text>
    </View>
  )
}

export default Boulder

const styles = StyleSheet.create({})