import axios from 'axios';
import {PokemonData} from './PokemonData.tsx';

const BACKEND_URL = 'https://pokeapi.co/api/v2';

export default function fetchPokemon() {
  axios.get(BACKEND_URL + '/pokemon/ditto').then(response => {
    const pokemonData: PokemonData = response.data;
    console.log('pokemon ability ' + pokemonData.cries.legacy);
  });
}
