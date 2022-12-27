import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from './BottomTabNav'


function Splash({ navigation }) {
    setTimeout(() => {
        navigation.replace('Main')
    }, 3000)
    return (
        <View>
            <Text style={{fontSize:35, textAlign:'center', color:'black', flexDirection:'column', justifyContent:'space-between'}}>Splash Screen</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();
const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Main' component={BottomTabNav} />
        </Stack.Navigator>
    )
}

export default StackNav