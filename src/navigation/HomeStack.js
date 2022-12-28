import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import HomeDetailed from '../screens/HomeDetailed';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'> 
            <Stack.Screen name='Home' component={Home}
            options={{ headerShown:false}} /> 
            <Stack.Screen name='HomeDetailed' component={HomeDetailed} />
        </Stack.Navigator>
    )
}

export default HomeStack