import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import PokedexSearchScreen from './screens/PokedexSearchScreen.tsx';
import {whoPokemon} from './pokemonrequests/SearchPokemon.tsx';

function App(): React.JSX.Element {
  useEffect(() => {
    async function gPokemon() {
      await whoPokemon('pickachu');
    }
    gPokemon()
      .then(r => console.log('r ' + r))
      .catch(error => {
        console.log('error ' + error);
      });
  }, []);

  return (
    <View style={styles.mainScreen}>
      <PokedexSearchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#cc0000',
  },
});
export default App;
