import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import SessionList from '../components/Home/SessionList'

type Props = {}

const Home = (props: Props) => {
  return (
    <View>
      <Text>Home</Text>
      <SessionList />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})