import React from "react";
import { StyleSheet } from "react-native";
const darkMode = StyleSheet.create({
    container:{
        backgroundColor:'grey'
      },
    listHeader: {
        height: 55,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headStyle: {
        color: '#333',
        fontSize: 27,
        fontWeight: 'bold'
    },
    items: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 10,
        backgroundColor: 'black',
        shadowColor: 'white',
        borderRadius: 23,
        shadowOffset: {
            width: 15,
            height: 20
        },
        shadowOpacity: .3,
        shadowRadius: 10
    },
    title: {
        fontWeight: '600',
        fontSize: 20,
        marginHorizontal: 10,
        padding: 10,
        color: 'white',
        textAlign: 'center',

    },thumbNailContainer: {
        backgroundColor: 'white', 
        borderRadius: 40,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
      },
})

export default darkMode;