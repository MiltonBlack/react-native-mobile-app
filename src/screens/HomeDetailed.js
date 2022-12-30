import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const HomeDetailed = ({ route }) => {
  return (
    <ScrollView >
      <Image source={route.params.image} style={Styles.banner} />
      <Text style={Styles.title}>{route.params.context}</Text>
      <Text style={Styles.desc}>{route.params.title_1}</Text>
      <Text style={Styles.desc}>{route.params.body_1}</Text>
      <Image source={route.params.image} style={Styles.image} />
      {route.params.image && <Image source={route.params.image} style={Styles.image} />}
    </ScrollView>
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
  },
  image: {
    width:'90%',
    height:180,
    alignSelf:'center'
  }
})

export default HomeDetailed