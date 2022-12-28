import { View, Text } from 'react-native'
import React from 'react'

const LibraryDetailed = ({ navigation }) => {
  return (
    <View>
      <Text>{navigation.getParam('post_title')}</Text>
      <Text>{navigation.getParam('desc')}</Text>
    </View>
  )
}

export default LibraryDetailed