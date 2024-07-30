import {StyleSheet, View, ImageBackground} from 'react-native';
import PokedexSearchScreen from './screens/PokedexSearchScreen.tsx';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./pokedexBackground.jpg')}
        style={styles.mainScreen}
        resizeMode="stretch">
        <PokedexSearchScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
