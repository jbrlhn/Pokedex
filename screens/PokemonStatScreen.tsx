import { Image, View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchPokemon} from '../pokemonrequests/SearchPokemon.tsx';
import {PokemonData} from '../pokemonrequests/PokemonData.tsx';
import TitleBar from '../components/TitleBar.tsx';
import { backgroundColors, colors, textColor } from '../assets/colors.js';

export default function PokedexStatScreen({pokemonName}: {pokemonName: string}
) {
    const [getPokemon, setPokemon] = useState<PokemonData>();

    useEffect(() => {
        async function pokemonSearch() {
            const cc = await fetchPokemon(pokemonName.toLowerCase());
            setPokemon(cc);
        }
        pokemonSearch();
    }, []);

    const pokemonType = (type: string | undefined) => {
      return backgroundColors[type as keyof typeof backgroundColors];
    };
    
    return (
        <SafeAreaView style={{...styles.screen}} >
            <View style={{...styles.card, backgroundColor: pokemonType(getPokemon?.types[0]?.type.name ?? 'none')}}>
                <View style={styles.pokemonInfo}>
                    <ImageBackground  source={require('../assets/img/Pokeball.png')} imageStyle={{opacity: 0.2}}>
                        <Image
                            style={styles.image}
                            source={{uri: getPokemon?.sprites.front_default}}
                        />
                    </ImageBackground>
                </View>
                <View>
                    <Text style={styles.pokemonID}>#{getPokemon?.id}</Text>
                    <Text style={styles.pokemonName}>{getPokemon?.name}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
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
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 24,
        textAlign: 'left',
        color: textColor.number
    },
    pokemonName: {
        fontSize: 30,
        textAlign: 'left',
        color: textColor.white
    },
    pokemonInfo: {
        padding: 8,
    }
});
