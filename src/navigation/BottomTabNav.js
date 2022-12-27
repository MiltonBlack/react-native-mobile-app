import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/Home';
import Library from '../screens/Library';
import Settings from '../screens/Settings';

const Tabs = createMaterialBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tabs.Navigator
            initialRouteName='Home'
            activeColor='#e91e63'
            barStyle={{ backgroundColor: 'tomato' }}>
            <Tabs.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='home' color={color} size={26} />
                    )
                }} />
                <Tabs.Screen
                name='Library'
                component={Library}
                options={{
                    tabBarLabel: 'Library', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account' color={color} size={26} />
                    )
                }} />
                <Tabs.Screen
                name='Setting'
                component={Settings}
                options={{
                    tabBarLabel: 'bell', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='home' color={color} size={26} />
                    )
                }} />
        </Tabs.Navigator>
  )
}

export default BottomTabNav