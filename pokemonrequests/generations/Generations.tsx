
const BACKEND_URL = 'https://pokeapi.co/api/v2/';

export const fetchGeneration = async (gen: number) => {
	return fetch(`${BACKEND_URL}/generation/${gen}`)
		.then(response  => {
			return response.json();
		})
		.catch(error => {
			console.error(error);
		}
	)
}