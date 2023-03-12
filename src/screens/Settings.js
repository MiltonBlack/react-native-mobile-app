import { View, Text, Button, Linking, Alert } from 'react-native'
import React, { useCallback } from 'react'

const Settings = () => {
  const url = 'https://www.youtube.com/@engineeringgraphics4978';

  const canOpenUrlLinkButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Invalid URL Link: ${url}`)
      }
    }, [url])
    return <Button title={children} onPress={handlePress} />
  };
  const Seperator = () => {
    return <View style={{ height: 1, width: '100%', backgroundColor: '#cce' }} />
  }
  return (
    <View style={{ margin: 20 }}>
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 20 }}>My Profile</Text>
      <Seperator />
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 20 }}>Appearance Settings</Text>
      <Seperator />
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 20 }}>Update</Text>
      <Seperator />
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 20 }} onPress={()=> Linking.openURL(url)}>Subscribe to our Tutorial Channel for more content</Text>
      <canOpenUrlLinkButton url={url}>Subscribe to our channel</canOpenUrlLinkButton>
      <View style={{ height: 350 }}></View>
      {/* <Button title='hello' /> */}
    </View>
  )
}

export default Settings