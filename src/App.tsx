import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Names, GoogleSignIn, GoogleSignInResult } from './pages';
import { Stack } from './navigator';

function App(): React.Component {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Names.GoogleSignIn}>
        <Stack.Screen name={Names.GoogleSignIn} component={GoogleSignIn} />
        <Stack.Screen
          name={Names.GoogleSignInResult}
          component={GoogleSignInResult}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
