import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const HomeDetailed = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View>
      <Image source={route.params.image} style={Styles.banner} />
      <Text style={Styles.title}>{route.params.context}</Text>
      <Text style={Styles.desc}>{route.params.desc}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 250,
  },
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

export default HomeDetailed