import {StyleSheet, View} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';

function App(): React.JSX.Element {
  return <View style={styles.mainScreen}>{<HomeScreen/>}</View>;
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
});
export default App;
