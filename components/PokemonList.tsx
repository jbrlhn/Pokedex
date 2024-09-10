import { Result } from '../pokemonrequests/AllPokemon';
import {
	FlatList,
	Pressable,
	StyleSheet,
	Text,
	View,
	Platform, Image, ImageBackground,
} from 'react-native';

import { textColor } from '../assets/colors';
import React from 'react';

type PokemonInfo = {
	name?: string,
	url?: string,
	id?: number
}

const pokemonImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

const capitalizeName = (currentName: string) => {
	const firstLetter = currentName.charAt(0).toUpperCase();
	const remainderLetters = currentName.slice(1) ?? '';
	return firstLetter + remainderLetters;
};

const leadingNumber = (order: string, size: number) => {
	order = order.toString();
	while (order.length < size) order = "0" + order;
	return order;
}

const getPokemonImage = (url: string) => {
	return `${pokemonImageUrl}${url?.split('/').filter(Number)[0]}.png`
}


export default function AllPokemonList({
    pokemonResults,
    cardPressed,
    pokemonRef,
}: {
    pokemonResults: Result[];
    cardPressed: (url: string) => void;
    pokemonRef?: React.MutableRefObject<FlatList | null>;
}) {
	const pokemonIdList: PokemonInfo[] = [];

	pokemonResults?.forEach((pokemon) => {
		return pokemonIdList.push({
            name: capitalizeName(pokemon?.name ?? ''),
            url: pokemon?.url,
            id: Number(pokemon?.url?.split('/').filter(Number)[0]) ?? null
        });
	})

	pokemonIdList.sort((n1,n2) => (n1?.id ?? 0) - (n2?.id ?? 0))

    return (
        <View style={styles.pokemonList}>
            <FlatList
                keyExtractor={(pokemonList) =>
                   pokemonList.id
                }
                extraData={pokemonIdList}
                showsVerticalScrollIndicator={false}
                initialNumToRender={20}
                data={pokemonIdList}
                renderItem={({item}) => (
                    <Pressable
                        style={styles.card}
                        onPress={() => {
                            cardPressed(item.url ?? '');
                        }}>
	                    <ImageBackground
		                    style={styles.background}
		                    source={require('../assets/img/BottomHalfPokeball.png')}>
	                    <View style={styles.cardContent}>
		                    <View style={styles.stats}>
			                    <Text style={styles.name}>
				                    #{leadingNumber(item.id, 3)}
			                    </Text>
		                        <Text style={styles.name}>
		                            {capitalizeName(item.name ?? '')}
		                        </Text>
		                    </View>
							<Image
								style={styles.pokemonPhoto}
								source={{uri: getPokemonImage(item.url ?? '')}}
							/>
	                    </View>
	                    </ImageBackground>
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
		padding: 16
	},
	pokemonPhoto: {
		width: 150,
		height: 150,
		resizeMode: 'cover'
	},
	stats: {
		flexDirection: 'column',
	},
	background: {
		flex: 1,
		resizeMode: 'contain',
		borderRadius: 24
	}
});