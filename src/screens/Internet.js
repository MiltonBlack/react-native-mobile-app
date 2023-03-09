import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

const Internet = ({ navigation }) => {
    const [isInternetConnected, setInternetIsConnected] = useState(false);
    useEffect(() => {
        const online = NetInfo.addEventListener(state => {
            state.isConnected ? setInternetIsConnected(true) : setInternetIsConnected(false)
        })
        isInternetConnected ? navigation.navigate('Engineering Drawing Tutorials') : null;
        return () => online();
    }, [])
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>
                Your Internet is Not connected! or you don't have an Active Internet Connection!!!.
            </Text>
            <Text style={Styles.text}>Please Connect to the Internet</Text>
            <TouchableOpacity onPress={() => isInternetConnected ? navigation.navigate('Engineering Drawing Tutorials') : null} style={Styles.refresh}>
                <Text style={{ fontSize: 25 }}>
                    Refresh Connection!!!
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    refresh: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    text: {
        margin: 10,
        fontSize: 20,
    }
})

export default Internet