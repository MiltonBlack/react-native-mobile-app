import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {
  const [data, setData] = useState([
    {
        id: 1,
        post_title: 'Introduction to Engineering Drawing',
        postImage: require('./assets/af-1.jpeg'),
        title_1: 'What is Engineering/Technical Drawing',
        desc: 'Introduction to the Basics of Engineering Drawing',
        body_1: 'An Engineering Drawing is a type of Technical drawing that includes all the details of a product that needs to be manufactured or machined. Its Goal is to indicate the Geometry required for the products"s creation. ',
        Image_1: require('./assets/af-1.jpeg'),
        body_2: 'The measurements, attributes, and other characteristics of the items are described using standardized languages and symbols, which makes it easier for others to interprete the drawing and produce the part accurately.',
        Image_2: require('./assets/af-1.jpeg'),
        body_3: 'A basic component is often specified with a number of drawings that are connected by a primary drawing or assembly drawing. Additionally, extra textual explanations can be employed in addition to pictorial representations to convey the required information.',
        Image_3: require('./assets/af-1.jpeg'),
        video: 'youtube video link',
        title_2: 'Importance of Engineering Drawing',
        body_4: 'Engineering drawings provide the complete information of a component on its designing aspects. This will be very useful for the engineers to understand the components properly. Drawing gives perfect design on paper with proper dimensions.',
        Image_4: require('./assets/af-1.jpeg'),
        body_5:'',
        Image_5: require('./assets/af-1.jpeg'),
        body_6:'',
        Image_6: require('./assets/af-1.jpeg'),
    },
    {
        id: 2,
        post_title: 'Technical Drawing Basics and Requirements',
        postImage: require('./assets/razer.jpeg'),
        title_1:'',
        desc: 'Basics and Requirements of Engineering Drawing concepts',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',

    },
    {
        id: 3,
        post_title: 'Technical Drawing Line Geometry',
        postImage: require('./assets/samsung.jpeg'),
        title_1:'',
        desc: 'Lines and Line Geometry In Technical Drawing',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',

    },
    {
        id: 4,
        post_title: 'Technical Drawing Basic Shapes',
        postImage: require('./assets/sony.jpeg'),
        title_1:'',
        desc: 'Triangles, Quadlterial and Polygons',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
    },
    {
        id: 5,
        post_title: 'Conic Sections',
        postImage: require('./assets/af-1.jpeg'),
        title_1:'',
        desc: 'Conic sections shapes',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',

    },
    {
        id: 6,
        post_title: 'Loci',
        postImage: require('./assets/sony-headset.jpeg'),
        title_1:'',
        desc: 'Cycloids, Epicycloids, Hypocycloids, E',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
    },
    {
        id: 7,
        post_title: 'Tangent to Conic Sections and Loci',
        postImage: require('./assets/af-1.jpeg'),
        title_1:'',
        desc: 'Tangents and Normals to Conic sections and locis',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
    },
    {
        id: 8,
        post_title: 'Tangency',
        postImage: require('./assets/af-1.jpeg'),
        title_1:'',
        desc: 'Introduction to Tangency and Arcs in Engineering Drawing',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
    },
    {
        id: 9,
        post_title: 'Views in Technical/Engineering Drawing',
        postImage: require('./assets/af-1.jpeg'),
        title_1:'',
        desc: 'Introduction to the Basic Views of Engineering Drawing',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
    },
    {
        id: 10,
        post_title: 'Isometric Projection',
        postImage: require('./assets/af-1.jpeg'),
        title_1:'',
        desc: 'Constructing and Interpreting Isometric Figures',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
    },
    {
        id: 11,
        post_title: 'Orthographic Projection',
        postImage: require('./assets/af-1.jpeg'),
        title_1:'',
        desc: 'Orthographic Projections in Engineering Drawing',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
    },
    {
        id: 12,
        post_title: 'Sectioning',
        postImage: require('./assets/af-1.jpeg'),
        title_1:'',
        desc: 'Sectioning Views in Engineering Drawing',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
    },
    {
        id: 13,
        post_title: 'Assembly Drawing',
        postImage: require('./assets/af-1.jpeg'),
        title_1:'',
        desc: 'Assembly Engineering Drawing',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
    },
    {
        id: 14,
        post_title: 'Screws thread, Fasteners and Locking Devices',
        postImage: require('./assets/af-1.jpeg'),
        title_1:'',
        desc: 'Screws thread, Fasteners and Locking Device',
        body_1:'',
        Image_1:'',
        body_2:'',
        Image_2:'',
        body_3:'',
        Image_3:'',
        video:'',
        title_2:'',
        body_4:'',
        Image_4:'',
        body_5:'',
        Image_5:'',
        body_6:'',
        Image_6:'',
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
        onPress={() => { navigation.navigate('HomeDetailed', { context: item.post_title, desc: item.desc, image: item.postImage, title_1: item.title_1, body_1: item.body_1, image_1: item.Image_1, body_2:item.body_2, image_2: item.Image_2, body_3: item.body_3, image_3: item.Image_3, title_2:item.title_2 }) }}>
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
    <View style={Styles.container}>
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
  image:{
    width:'100%',
    height:'100%'
  }
})

export default Home