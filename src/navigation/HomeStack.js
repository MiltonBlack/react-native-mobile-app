import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import HomeDetailed from '../screens/HomeDetailed';
import Library from '../screens/Library';
import LibraryDetailed from '../screens/LibraryDetailed';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'> 
            <Stack.Screen name='Home' component={Home}
            options={{ headerShown:false}} /> 
            <Stack.Screen name='HomeDetailed' component={HomeDetailed} />
            <Stack.Screen name='Library' component={Library} />
            <Stack.Screen name='LibraryDetailed' component={LibraryDetailed} />
        </Stack.Navigator>
    )
}

export default HomeStack