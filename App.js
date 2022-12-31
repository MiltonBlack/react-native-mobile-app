import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import StackNav from './src/navigation/StackNav';

const App = () => {
  return (<>
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  </>
  );
};

export default App;
