import { colors } from '../assets/colors';


export const PokemonTypeColor = (type: string | undefined) => {
	return colors[type as keyof typeof colors];
};