import axios from 'axios';
import {PokemonData} from './PokemonData.tsx';

const BACKEND_URL = 'https://pokeapi.co/api/v2/';

export async function fetchPokemon(pokemonName: string) {
  const response = await axios
    ?.get(BACKEND_URL + 'pokemon/' + pokemonName)
    .catch(error => console.log('error ' + error));

  const pokemonData: PokemonData = response?.data;

  return pokemonData;
}
