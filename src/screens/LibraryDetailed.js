import { View, Text, StyleSheet, Image } from 'react-native'
import YoutubeIframe from 'react-native-youtube-iframe'
import React from 'react'

const LibraryDetailed = ({ route }) => {
  return (
    <View>
      <Text style={Styles.title}>{route.params.context}</Text>
      <YoutubeIframe 
        height={300}
        play={false}
        videoId={route.params.video}/>
        <Text>Put on your Internet Connection For video streaming from youtube</Text>
      <Text style={Styles.desc}>{route.params.content}</Text>
      <Image style={Styles.image} source={route.params.image}/>
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
  },
  image: {
    width: '90%',
    height: 180,
    alignSelf: 'center'
  }
})
export default LibraryDetailed