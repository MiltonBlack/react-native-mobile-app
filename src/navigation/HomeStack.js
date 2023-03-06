import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import HomeDetailed from '../screens/HomeDetailed';

const Stack = createNativeStackNavigator();
// setup network connection page as initial route
// if connection redirect to home page
// return the internet page if network connection is lost 
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