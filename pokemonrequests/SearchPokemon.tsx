const BACKEND_URL = 'https://pokeapi.co/api/v2/';

export const fetchSearchedPokemon = async (pokemonName: string) => {

    return fetch(BACKEND_URL + 'pokemon/' + pokemonName )
        .then(response  => {
            return response.json();
            }
        ).catch(()=> {
            return null
        }
    )
}

export const fetchAllPokemon = async () => {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(response => {
            return response.json()
        }).catch(() => {
            return null
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