import {StyleSheet, View} from 'react-native';
import PokedexSearchScreen from './screens/PokedexSearchScreen.tsx';
import React from 'react';

function App(): React.JSX.Element {
  return <View style={styles.mainScreen}>{<PokedexSearchScreen/>}</View>;
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default App;
