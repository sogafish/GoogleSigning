import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignIn } from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <GoogleSignIn />
    </NavigationContainer>
  );
};

export default App;
