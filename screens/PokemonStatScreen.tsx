import {Image, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchPokemon} from '../pokemonrequests/SearchPokemon.tsx';
import {PokemonData} from '../pokemonrequests/PokemonData.tsx';
import TitleBar from '../components/TitleBar.tsx';

export default function PokedexStatScreen({pokemonName}: {pokemonName: string}
) {
    const [getPokemon, setPokemon] = useState<PokemonData>();

    useEffect(() => {
        async function pokemonSearch() {
            const cc = await fetchPokemon(pokemonName.toLowerCase());
            console.log('cc ' + cc.name);
            setPokemon(cc);
        }
        pokemonSearch();
    }, [pokemonName]);
    console.log('sprites ' + getPokemon?.sprites.front_default);
    return (
        <SafeAreaView style={styles.screen}>
            <TitleBar title={getPokemon?.name} />
            <View>
                <Image
                    style={styles.image}
                    source={{uri: getPokemon?.sprites.front_default}}
                />
            </View>
            <View style={styles.stat}>
                <Text>Height: {getPokemon?.height}</Text>
                <Text>Weight: {getPokemon?.weight}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
screen: {
    flex: 1,
    margin: 16,
},
stat: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
},
image: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 4,
    },
});
