import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/navigation/StackNav';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  </Provider>
  );
};

export default App;
