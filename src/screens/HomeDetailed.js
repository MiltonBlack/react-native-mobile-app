import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import YoutubeIframe from 'react-native-youtube-iframe'

const HomeDetailed = ({ route }) => {
  return (
    <ScrollView >
      <Image source={route.params.image} style={Styles.banner} />
      <Text style={Styles.title}>{route.params.context}</Text>
      <Text style={Styles.desc}>{route.params.title_1}</Text>
      <Text style={Styles.desc}>{route.params.body_1}</Text>
      <Image source={route.params.image_1} style={Styles.image} />
      <Text style={Styles.desc}>{route.params.body_2}</Text>
      {route.params.image && <Image source={route.params.image_2} style={Styles.image} />}
      <Text style={Styles.desc}>{route.params.body_3}</Text>
      {route.params.video !== '' ? <YoutubeIframe
        height={300}
        play={false}
        videoId={route.params.video} /> : null}
      <Image source={route.params.image_3} style={Styles.image} />
      <Text style={Styles.desc}>{route.params.title_2}</Text>
      <Text style={Styles.desc}>{route.params.body_4}</Text>
      <Image source={route.params.image_4} style={Styles.image} />
      <Text style={Styles.desc}>{route.params.body_5}</Text>
      <Image source={route.params.image_5} style={Styles.image} />
      <Text style={Styles.desc}>{route.params.body_6}</Text>
      <Image source={route.params.image_6} style={Styles.image} />
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
    width: '90%',
    height: 180,
    alignSelf: 'center'
  }
})

export default HomeDetailed