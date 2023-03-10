import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Library from '../screens/Library';
import LibraryDetailed from '../screens/LibraryDetailed';
import Internet from '../screens/Internet';

const Stack = createNativeStackNavigator();
const LibraryStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Library'>
            <Stack.Screen
                name='Library'
                component={Library}
                options={{ headerShown: false }} />
            <Stack.Screen
                name='LibraryDetailed'
                component={LibraryDetailed}
                options={{ headerShown: false }} />
            <Stack.Screen name='Connection' 
                component={Internet} 
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default LibraryStack