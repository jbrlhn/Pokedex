const BACKEND_URL = 'https://pokeapi.co/api/v2/';

export const fetchSearchedPokemon = async (pokemonName: string) => {

  return fetch(BACKEND_URL + 'pokemon/' + pokemonName )
      .then(response  => {
        return response.json();
      })
      .catch(error => {
        console.error(error);
      })
}

export const fetchAllPokemon = async () => {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
        .then(response => {
            return response.json()
        })
}

export const fetchPokemonURL = async (url: string) => {
    return fetch(url)
        .then(response  => {
            return response.json();
        })
        .catch(error => {
            console.error(error);
        })
}