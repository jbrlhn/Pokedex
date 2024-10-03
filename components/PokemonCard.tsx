import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { textColor } from '../assets/colors.js';
import { TypePill } from './TypePill';
import { PokemonData } from '../pokemonrequests/PokemonData';
import { PokemonTypeColor } from './PokemonTypeColor';

export default function PokemonCard({pokemonInfo}: {pokemonInfo: PokemonData | null}
	) {
	function leadingNumber(order: number | string, size: number) {
		order = order.toString();
		while (order.length < size) order = "0" + order;
		return order;
	}

	const firstLetter = pokemonInfo?.name.charAt(0).toUpperCase() ?? '';
	const remainderLetters = pokemonInfo?.name.slice(1) ?? '';
	const displayName = firstLetter + remainderLetters;
	const typeCount = pokemonInfo?.types.length ?? 0
	let pillType = [];

	// Display all Pokémon types
	for (let type = 0; type < typeCount; type++) {
		pillType.push(
			<View key={type}>
				<TypePill text={pokemonInfo?.types[type].type.name} background={pokemonInfo?.types[type].type.name}/>
			</View>
		)
	}

	return (
		<View>
			<View style={{...styles.card, backgroundColor: PokemonTypeColor(pokemonInfo?.types[0]?.type.name)}}>
				<View>
					<Text style={styles.pokemonID}>#{leadingNumber(pokemonInfo?.id ?? 0, 3)}</Text>
					<Text style={{...styles.pokemonName}}>{displayName}</Text>
					<View style={styles.pokemonTypeRow}>{pillType}</View>
				</View>
				<ImageBackground
					source={require('../assets/img/Pokeball.png')}
					imageStyle={{opacity: 0.2}}>
					{ pokemonInfo?.sprites?.front_default && (
						<Image
						style={styles.image}
					source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo?.id}.png`}}
				/>
					)}
				</ImageBackground>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: 16,
		marginHorizontal: 8
	},
	stat: {
		alignContent: 'flex-start',
		justifyContent: 'flex-start',
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: 'stretch'
	},
	pokemonID: {
		fontSize: 20,
		textAlign: 'justify',
		color: textColor.number
	},
	pokemonName: {
		fontSize: 26,
		textAlign: 'justify',
		color: textColor.white
	},
	pokemonTypeRow: {
		flexDirection: 'row'
	},
	pokemonTypePill: {
		padding: 8,
		margin: 2
	}
});