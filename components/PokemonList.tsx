import { Result } from '../pokemonrequests/AllPokemon';
import {
	FlatList,
	Pressable,
	StyleSheet,
	Text,
	View,
	Platform, Image,
} from 'react-native';

import { textColor } from '../assets/colors';
import React from 'react';


const capitalizeName = (currentName: string) => {
	const firstLetter = currentName.charAt(0).toUpperCase();
	const remainderLetters = currentName.slice(1) ?? '';
	return firstLetter + remainderLetters;
};

export default function AllPokemonList({
    pokemonResults,
    cardPressed,
    pokemonRef,
}: {
    pokemonResults: Result[];
    cardPressed: (url: string) => void;
    pokemonRef?: React.MutableRefObject<FlatList | null>;
}) {

    return (
        <View style={styles.pokemonList}>
            <FlatList
                keyExtractor={(pokemonList, index) =>
                    pokemonList?.name?.toString() ?? index.toString()
                }
                showsVerticalScrollIndicator={false}
                initialNumToRender={10}
                data={pokemonResults}
                renderItem={({item, index}) => (
                    <Pressable
                        style={styles.card}
                        onPress={() => {
                            cardPressed(item.url ?? '');
                        }}>
	                    <View style={styles.cardContent}>
		                    <Text style={styles.name}>
			                    {index + 1}
		                    </Text>
	                        <Text style={styles.name}>
	                            {capitalizeName(item.name ?? '')}
	                        </Text>
							<Image
								style={styles.pokemonPhoto}
								source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`}}
							/>
	                    </View>
                    </Pressable>
                )}
                ref={pokemonRef}
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
		fontSize: 32,
		textAlign: 'center',
		fontFamily: 'SFProTextRegular',
		color: textColor.black
	},
	card: {
		flex: 1,
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
	cardContent: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	pokemonPhoto: {
		width: 100,
		height: 100,
		resizeMode: 'cover',
	}
});