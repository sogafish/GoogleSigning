import React, { memo } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { styles } from './styles';

export const GoogleSignInResult = memo(function GoogleSignInResult() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <Text>Result</Text>
      </ScrollView>
    </SafeAreaView>
  );
});
