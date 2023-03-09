import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native'
import React from 'react'

const Library = ({ navigation }) => {
  const data = [
    {
      id: 1,
      title: "Lines in Engineering Drawing",
      image: require('./assets/af-1.jpeg'),
      video: 'QEb1j4qj-4',
      body: 'Know the Types of Lines and Their uses in Engineering Drawings',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 2,
      title: "Division of Lines",
      image: require('./assets/af-1.jpeg'),
      video: '2Cds4GwmZ5k',
      body: 'Divide a Straight line into an equal number of parts',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 3,
      title: "Perpendicular Lines",
      image: require('./assets/af-1.jpeg'),
      video: '0FCHrqsNGeg',
      body: 'Constructing lines that are at angle 90 degrees to each other',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 4,
      title: "Angle 60 Degrees",
      image: require('./assets/af-1.jpeg'),
      video: 'ow_lFFk6YeA',
      body: 'Constructing angle 60 Degrees and Bisecting it',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 5,
      title: "Angle 90 Degrees",
      image: require('./assets/af-1.jpeg'),
      video: '4jTrWiry-dQ',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 6,
      title: "Construct any Polygon on a given square base",
      image: require('./assets/af-1.jpeg'),
      video: 'Wd3dQ0bwvaI',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 7,
      title: "Construct Polygon using General method",
      image: require('./assets/af-1.jpeg'),
      video: 'cwDdRgn4R4c',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 8,
      title: "Construct an Ellipse using Rectangle Method",
      image: require('./assets/af-1.jpeg'),
      video: '',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 9,
      title: "Construct an Ellipse using Auxillary Method",
      image: require('./assets/af-1.jpeg'),
      video: 'QmWIwJ45_EI',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 10,
      title: "Construct a Parabola",
      image: require('./assets/af-1.jpeg'),
      video: 'hfddxMafASk',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 11,
      title: "Construct an Archmedian Spiral",
      image: require('./assets/af-1.jpeg'),
      video: 'XsGV9196TtU',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 12,
      title: "Construct an Involute of a Circle",
      image: require('./assets/af-1.jpeg'),
      video: 'fQjvmsSPnPU',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 13,
      title: "Cycloid",
      image: require('./assets/af-1.jpeg'),
      video: '_QmwQfqHBjw',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 14,
      title: "Epicycloid",
      image: require('./assets/af-1.jpeg'),
      video: '',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 15,
      title: "Hypocycloid",
      image: require('./assets/af-1.jpeg'),
      video: 'idT7Sf6Nwdk',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 16,
      title: "Tangent to an Ellipse",
      image: require('./assets/af-1.jpeg'),
      video: '',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 17,
      title: "Tangent to a Parabola",
      image: require('./assets/af-1.jpeg'),
      video: '5J-v1J760Ic',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 18,
      title: "Tangent to a Cycloid",
      image: require('./assets/af-1.jpeg'),
      video: 'EBrzt4w1-oI',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 19,
      title: "Tangency Problem 1",
      image: require('./assets/af-1.jpeg'),
      video: 'I7l2-jW3SNA',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 20,
      title: "Tangency problem 2",
      image: require('./assets/af-1.jpeg'),
      video: 'g5Q2PYqMws0',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 21,
      title: "Tangency Problem 3",
      image: require('./assets/af-1.jpeg'),
      video: 'EmfAgQi4B6k',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 22,
      title: "Tangency Problem 4",
      image: require('./assets/af-1.jpeg'),
      video: 'SF_4AbkBwmQ',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 23,
      title: "Tangency Problem 5",
      image: require('./assets/af-1.jpeg'),
      video: 'z7QUMAyvaTo',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 24,
      title: "Tangency Problem 6",
      image: require('./assets/af-1.jpeg'),
      video: 'aJb-Mj-yGXg',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 25,
      title: "Isometric Projection Problem 1",
      image: require('./assets/af-1.jpeg'),
      video: 'qF1kdQ4E13Y',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 26,
      title: "Isometric Projection Problem 2",
      image: require('./assets/af-1.jpeg'),
      video: 'tFl3g0W05wE',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 27,
      title: "Isometric Projection Problem 3",
      image: require('./assets/af-1.jpeg'),
      video: '',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 28,
      title: "Isometric Projection Problem 4",
      image: require('./assets/af-1.jpeg'),
      video: '9ZtIqL3Kr2A',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 29,
      title: "Isometric Projection Problem 5",
      image: require('./assets/af-1.jpeg'),
      video: 'Q_kSHjuodbg',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 30,
      title: "Isometric Projection Problem 6",
      image: require('./assets/af-1.jpeg'),
      video: 'GTrNuXM5f2Q',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 31,
      title: "Isometric Circles Projection 1",
      image: require('./assets/af-1.jpeg'),
      video: 'D4QPxoMEDZ8',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 32,
      title: "Isometric Circles Projection 2",
      image: require('./assets/af-1.jpeg'),
      video: 'WqSzfm0Fp3I',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 33,
      title: "Isometric Circles Projection 3",
      image: require('./assets/af-1.jpeg'),
      video: 'FoDREhwyFJQ',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 34,
      title: "Isometric Circles Projection 4",
      image: require('./assets/af-1.jpeg'),
      video: '_9yY7jlIaFQ',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 35,
      title: "First Angle Projection 1",
      image: require('./assets/af-1.jpeg'),
      video: '12ev-qLu8D0',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 36,
      title: "First Angle Projection 2",
      image: require('./assets/af-1.jpeg'),
      video: 'JVQ2qZvZFfs',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 37,
      title: "Third Angle Projection 1",
      image: require('./assets/af-1.jpeg'),
      video: '5wS1Zn0oaBY',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 38,
      title: "Third Angle Projection 2",
      image: require('./assets/af-1.jpeg'),
      video: '',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 39,
      title: "Sectioning Example 1",
      image: require('./assets/af-1.jpeg'),
      video: '6twDCWCVpRU',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 40,
      title: "Sectioning Example 2",
      image: require('./assets/af-1.jpeg'),
      video: 'Vku5MPJCpi4',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 41,
      title: "Sectioning Example 3",
      image: require('./assets/af-1.jpeg'),
      video: '1CgUQtOKzSY',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 42,
      title: "True Shape of a Hexagonal Pyramid",
      image: require('./assets/af-1.jpeg'),
      video: 'SyHs1Y-LX5Q',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 43,
      title: "True Shape of a Cone",
      image: require('./assets/af-1.jpeg'),
      video: '6TPc1-zE4ro',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 44,
      title: "Development",
      image: require('./assets/af-1.jpeg'),
      video: '28Hz67YgOLw',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    },
    {
      id: 45,
      title: "FreeHand Sketching 1",
      image: require('./assets/af-1.jpeg'),
      video: '',
      body: '',
      warn: 'Put on your Internet before watching the videos'
    }
  ]
  const headerBlock = () => {
    return (
      <Text style={Styles.headStyle}>LIBRARY</Text>
    )
  }
  const seperator = () => {
    return <View style={{ height: 1, width: '100%', backgroundColor: '#cce' }} />
  }
  const renderItems = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [internet, setInternet] = useState(false);
    function checkConn() {
      NetInfo.fetch().then((state) => {
        state.isConnected ? setInternet(true) : setInternet(false)
      })
    }

    useEffect(() => {
      const online = NetInfo.addEventListener(state => {
        state.isConnected ? setInternet(true) : setInternet(false)
      })
      return () => online();
    }, [modalVisible, internet, navigation])
    return (
      <TouchableOpacity
        style={Styles.items}
        key={item.id}
        onPress={() => {checkConn(); internet ?
          navigation.navigate('LibraryDetailed', { context: item.title, image: item.postImage, video: item.video, content: item.body }) : navigation.navigate('Connection'); }}>
        <View>
          <Text 
            style={Styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>)
  }
  return (
    <View>
      <FlatList
        numColumns={2}
        ListHeaderComponent={headerBlock}
        ListHeaderComponentStyle={Styles.listHeader}
        contentContainerStyle={{
          padding: 20,
          paddingTop: 35
        }}
        data={data}
        renderItem={renderItems}
        ListEmptyComponent={
          <Text>Please Wait while Loading...</Text>
        }
        keyExtractor={data.id} />
        {/* <Modal>
          <View></View>
        </Modal> */}
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    padding: 5,
    margin: 10,
    backgroundColor: 'rgba(123, 123, 123, 0.98)',
    shadowColor: 'black',
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
    color: 'black',
    textAlign:'center',
  
  }
})
export default Library