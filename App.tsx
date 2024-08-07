import {StyleSheet, View} from 'react-native';
import PokedexSearchScreen from './screens/PokedexSearchScreen.tsx';
import PokedexStatScreen from './screens/PokemonStatScreen.tsx';
import React, {useState} from 'react';
import { backgroundColors } from './assets/colors.js';

function App(): React.JSX.Element {
  const [searchedPokemon, setSearchedPokemon] = useState('');

  function selectedPokemonHandler(pickedPokemon: string) {
     setSearchedPokemon(pickedPokemon);
  }

  let screen = <PokedexSearchScreen onSearchPokemon={selectedPokemonHandler} />;

  if (searchedPokemon) {
    screen = <PokedexStatScreen pokemonName={searchedPokemon} />;
  }

  return <View style={styles.mainScreen}>{screen}</View>;
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default App;
