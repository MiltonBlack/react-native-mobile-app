import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from './BottomTabNav'
import Internet from '../screens/Internet'
import NetInfo from '@react-native-community/netinfo'

function Splash({ navigation }) {
    const [isOffline, setIsOffline] = useState(false);
    useEffect(() => {
        const isOnline = NetInfo.addEventListener(state => {
            state.isConnected ? setIsOffline(false) : setIsOffline(true);
            const offline = !(state.isConnected);
        })
        return () => isOnline();
    }, [])

    setTimeout(() => {
        isOffline ? navigation.navigate('Connection') : navigation.replace('Engineering Drawing Tutorials')
    }, 3000)
    return (
        <View style={{ margin: 5 }}>
            <Image source={require('./splash-image.png')} style={{ height: 300, width: 300, alignSelf: 'center' }} />
            <Text style={{ fontSize: 20, textAlign: 'center', color: 'black', flexDirection: 'column', justifyContent: 'space-between', marginTop: '30%', paddingVertical: 30, paddingHorizontal: 8 }}>Engineering Drawing Tutorials by Black Dice Graphics</Text>
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
            <Stack.Screen name='Connection' component={Internet} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNav