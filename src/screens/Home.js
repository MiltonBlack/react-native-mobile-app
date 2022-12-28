import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: 1,
      post_title: 'Introduction to Engineering Drawing',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Introduction to the Basics of Engineering Drawing',

    },
    {
      id: 2,
      post_title: 'Technical Drawing Basics and Requirements',
      postImage: require('./assets/razer.jpeg'),
      desc: 'Basics and Requirements of Engineering Drawing concepts',

    },
    {
      id: 3,
      post_title: 'Technical Drawing Line Geometry',
      postImage: require('./assets/samsung.jpeg'),
      desc: 'Lines and Line Geometry In Technical Drawing',

    },
    {
      id: 4,
      post_title: 'Technical Drawing Basic Shapes',
      postImage: require('./assets/sony.jpeg'),
      desc: 'Triangles, Quadlterial and Polygons',
    },
    {
      id: 5,
      post_title: 'Conic Sections',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Conic sections shapes',

    },
    {
      id: 6,
      post_title: 'Loci',
      postImage: require('./assets/sony-headset.jpeg'),
      desc: 'Cycloids, Epicycloids, Hypocycloids, E',

    },
    {
      id: 7,
      post_title: 'Tangent to Conic Sections and Loci',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Tangents and Normals to Conic sections and locis',

    },
    {
      id: 8,
      post_title: 'Tangency',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Introduction to Tangency and Arcs in Engineering Drawing',

    },
    {
      id: 9,
      post_title: 'Views in Technical/Engineering Drawing',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Introduction to the Basic Views of Engineering Drawing',

    },
    {
      id: 10,
      post_title: 'Isometric Projection',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Constructing and Interpreting Isometric Figures',

    },
    {
      id: 11,
      post_title: 'Orthographic Projection',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Orthographic Projections in Engineering Drawing',

    },
    {
      id: 12,
      post_title: 'Sectioning',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Sectioning Views in Engineering Drawing',

    },
    {
      id: 13,
      post_title: 'Assembly Drawing',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Assembly Engineering Drawing',

    },
    {
      id: 14,
      post_title: 'Screws thread, Fasteners and Locking Devices',
      postImage: require('./assets/af-1.jpeg'),
      desc: 'Screws thread, Fasteners and Locking Device',

    }
  ]);
  const headerBlock = () => {
    return (
      <Text style={Styles.headStyle}>Table of Contents</Text>
    )
  }
  const seperator = () => {
    return <View style={{ height: 1, width: '100%', backgroundColor: '#cce' }} />
  }
  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        style={Styles.items}
        key={item.id}
        onPress={() => { navigation.navigate('HomeDetailed', { context: item.post_title, desc: item.desc, image: item.postImage }) }}>
        <View style={Styles.thumbNailContainer}>
          <Image style={Styles.thumbNail} source={item.postImage} />
        </View>
        <View>
          <Text style={Styles.title}>{item.post_title}</Text>
          <Text style={Styles.desc}>{item.desc}</Text>
        </View>
      </TouchableOpacity>)
  }
  return (
    <View>
      {/* <Image
        style={StyleSheet.absoluteFillObject}
        source={require('./assets/razer.jpeg')}
        blurRadius={80} /> */}
      <FlatList
        ListHeaderComponent={headerBlock}
        ListHeaderComponentStyle={Styles.listHeader}
        contentContainerStyle={{
          padding: 20,
          paddingTop: 35
        }}
        data={data}
        renderItem={renderItems}
        ItemSeparatorComponent={seperator}
        ListEmptyComponent={<Text>Please wait while loading...</Text>}
        keyExtractor={data.id} />
    </View>
  )
}

const Styles = StyleSheet.create({
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
    backgroundColor: '#faed0f',
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
  }
})

export default Home