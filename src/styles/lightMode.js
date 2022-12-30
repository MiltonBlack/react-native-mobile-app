import React from "react";
import { StyleSheet } from "react-native";

const lightMode = StyleSheet.create({
  container: {
    backgroundColor: 'white'
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    shadowColor: '#000',
    borderRadius: 13,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .4,
    shadowRadius: 20
  },
  thumbNailContainer: {
    backgroundColor: '#abcdef',
    borderRadius: 40,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbNail: {
    height: 70,
    width: 70,
    borderRadius: 8
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginHorizontal: 20,
    paddingRight: 55,
    color: 'black'
  },
  desc: {
    fontSize: 13,
    opacity: 0.5,
    paddingTop: 5,
    marginLeft: 20,
    paddingRight: 60,
    color: '#0077fa'
  },
  image: {
    width: '100%',
    height: '100%'
  }
}
)

export default lightMode;