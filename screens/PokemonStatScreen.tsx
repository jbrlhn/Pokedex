import { Image, View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, {useEffect, useState} from 'react';
import {PokemonData} from '../pokemonrequests/PokemonData.tsx';
import { backgroundColors, colors, textColor } from '../assets/colors.js';
import {TypePill}  from '../components/TypePill.tsx';

export default function PokedexStatScreen({pokemonInfo}: {pokemonInfo: PokemonData | null}
) {
    return (
        <View style={{...styles.card}}>
            <ImageBackground
            source={require('../assets/img/Pokeball.png')}
            imageStyle={{opacity: 0.2}}>
                { pokemonInfo?.sprites?.front_default && (
                    <Image
                      style={styles.image}
                      source={{uri: pokemonInfo?.sprites?.front_default} }
                    />
                )}
            </ImageBackground>
            <View>
                <Text style={styles.pokemonID}>#{pokemonInfo?.id}</Text>
                <Text style={{...styles.pokemonName}}>{pokemonInfo?.name}</Text>
                <TypePill text={pokemonInfo?.types[0].type.name} background={pokemonInfo?.types[0].type.name}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        fontFamily: 'Bold',
        fontSize: 24,
        textAlign: 'left',
        color: textColor.number
    },
    pokemonName: {
        fontSize: 30,
        textAlign: 'left',
        color: textColor.white
    },
    pokemonTypeRow: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
});
