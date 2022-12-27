import { View, Text, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from './BottomTabNav'


function Splash({ navigation }) {
    setTimeout(() => {
        navigation.replace('Engineering Drawing Tutorials')
    }, 3000)
    return (
        <View>
            <Image source={require('./splash-image.png')} style={{ height: 400, width: 400, alignSelf: 'center' }} />
            <Text style={{ fontSize: 35, textAlign: 'center', color: 'black', flexDirection: 'column', justifyContent: 'space-between', marginTop: '30%', paddingVertical: 30, paddingHorizontal: 8 }}>Engineering Drawing Tutorials by Milton Azibapu</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();
const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Engineering Drawing Tutorials' component={BottomTabNav} />
        </Stack.Navigator>
    )
}

export default StackNav