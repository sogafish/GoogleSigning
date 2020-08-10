import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Names, GoogleSignIn } from './pages';
import { Stack } from './navigator';

function App(): React.Component {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Names.GoogleSignIn} component={GoogleSignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
