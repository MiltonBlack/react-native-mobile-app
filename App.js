import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import BottomTabNav from './src/navigation/BottomTabNav';


const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNav/>
    </NavigationContainer>
  );
};

export default App;
