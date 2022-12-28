import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from '../screens/Settings';
import HomeStack from './HomeStack';
import LibraryStack from './LibraryStack';

const Tabs = createMaterialBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tabs.Navigator
            initialRouteName='HomeStack'
            activeColor='#e91e63'
            barStyle={{ backgroundColor: 'tomato' }}>
            <Tabs.Screen
                name='Home'
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='home' color={color} size={26} />
                    )
                }} />
                <Tabs.Screen
                name='LibraryStack'
                component={LibraryStack}
                options={{
                    tabBarLabel: 'Library', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account' color={color} size={26} />
                    )
                }} />
                <Tabs.Screen
                name='Setting'
                component={Settings}
                options={{
                    tabBarLabel: 'Settings', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='bell' color={color} size={26} />
                    )
                }} />
        </Tabs.Navigator>
  )
}

export default BottomTabNav