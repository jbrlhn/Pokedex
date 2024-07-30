import axios from 'axios';
import {PokemonData} from './PokemonData.tsx';

const BACKEND_URL = 'https://pokeapi.co/api/v2/';

// export default function fetchPokemon(): PokemonData | null {
//   axios
//     .get(BACKEND_URL + 'pokemon/charmander')
//     .then(response => {
//       const pokemonData: PokemonData = response.data;
//       console.log('pokemon ability ' + pokemonData.cries.legacy);
//       return pokemonData;
//     })
//     .catch(error => {
//       console.log('fetch error ' + error);
//     });
//   return null;
// }

export async function fetchPokemon(pokemonName: string) {
  const response = await axios.get(BACKEND_URL + 'pokemon/' + pokemonName);

  const charmData: PokemonData = response.data;
  console.log('charm ' + {pokemonName});

  return charmData;
}
