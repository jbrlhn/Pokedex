import { Result } from '../pokemonrequests/AllPokemon';
import {
	FlatList,
	Pressable,
	StyleSheet,
	Text,
	View,
	Platform,
} from 'react-native';

import { textColor } from '../assets/colors';


const capitalizeName = (currentName: string) => {
	const firstLetter = currentName.charAt(0).toUpperCase();
	const remainderLetters = currentName.slice(1) ?? '';
	return firstLetter + remainderLetters;
};

export default function AllPokemonList({pokemonResults, cardPressed}: {pokemonResults: Result[], cardPressed: (url: string) => void})  {
		return (
			<View style={styles.pokemonList}>
				<FlatList
					keyExtractor={(pokemonList, index) =>
						pokemonList?.name?.toString() ?? index.toString()
					}
					data={pokemonResults}
					renderItem={({item}) => (
						<Pressable
							style={styles.card}
							onPress={() => {
								// pokemonCardPressed(item.url ?? '');
								cardPressed(item.url ?? '')
							}}>
							<Text style={styles.name}>
								{capitalizeName(item.name ?? '')}
							</Text>
						</Pressable>
					)}
				/>
			</View>
		);
};


const styles = StyleSheet.create({
	pokemonList: {
		flex: 1,
		marginBottom: 8
	},
	name: {
		flex: 1,
		fontSize: 32,
		textAlign: 'center',
		fontFamily: 'SFProTextRegular',
		color: textColor.black
	},
	card: {
		justifyContent: 'space-between',
		backgroundColor: 'white',
		alignItems: 'center',
		borderRadius: 8,
		flexDirection: 'row',
		padding: 16,
		margin: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		shadowOpacity: 0.2,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
	},
});