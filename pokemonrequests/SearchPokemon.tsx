import axios from 'axios';
import {PokemonData} from './PokemonData.tsx';

const BACKEND_URL = 'https://pokeapi.co/api/v2/';

export const fetchSearchedPokemon = async (pokemonName: string) => {

  return fetch(BACKEND_URL + 'pokemon/' + pokemonName )
      .then(response  => {
        return response.json()
      })
      .catch(error => {
        console.error(error);
      })
}