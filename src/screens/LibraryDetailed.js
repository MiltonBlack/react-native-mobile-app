import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LibraryDetailed = ({ route }) => {
  return (
    <View>
      <Text style={Styles.title}>{route.params.context}</Text>
      <Text style={Styles.desc}>{route.params.desc}</Text>
    </View>
  )
}
const Styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'black',
    margin: 15,
    textAlign: 'center'
  },
  desc: {
    color: 'black',
    margin: 10
  }
})
export default LibraryDetailed