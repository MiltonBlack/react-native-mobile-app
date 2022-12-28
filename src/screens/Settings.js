import { View, Text, Button } from 'react-native'
import React from 'react'

const Settings = () => {
  const Seperator = () => {
    return <View style={{ height: 1, width: '100%', backgroundColor: '#cce' }} />
  }
  return (
    <View style={{ margin: 20 }}>
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 20 }}>My Profile</Text>
      <Seperator />
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 20 }}>Appearance Settings</Text>
      <Seperator />
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 20 }}>Rating</Text>
      <Seperator />
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 20 }}>Review</Text>
      <View style={{ height: 350 }}></View>
      <Button
        title='Light/Dark Mode'
        color="#841584"
      />
    </View>
  )
}

export default Settings