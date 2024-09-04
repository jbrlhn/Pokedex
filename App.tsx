import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	View,
	Platform,
	Image,
	TouchableHighlight,
	Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import GenerationsSheet from './screens/GenerationsSheet';
import HomeScreen from './screens/HomeScreen';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import PokedexSearchScreen from './screens/PokedexSearchScreen';
import { backgroundColors, textColor } from './assets/colors';
import { PokemonData } from './pokemonrequests/PokemonData';
import PokedexStatScreen from './screens/PokemonStatScreen';
import { fetchAllPokemon, fetchSearchedPokemon } from './pokemonrequests/SearchPokemon';
import { Result } from './pokemonrequests/AllPokemon';
import { fetchGeneration } from './pokemonrequests/Generations';
import { Generation } from './pokemonrequests/GenerationsInterface';
import ScrollView = Animated.ScrollView;
import AllPokemonList from './components/PokemonList';

function App(): React.JSX.Element {
    const searchSheet = useRef<BottomSheetMethods>(null);
    const generationsSheet = useRef<BottomSheetMethods>(null);
    const pokemonSheet = useRef<BottomSheetMethods>(null);
    const [getPokemonInfo, setPokemonInfo] = useState<PokemonData | null>(null);
    const [getPokemonList, setPokemonList] = useState<Result[]>();

    async function searchBarPressed() {
        searchSheet.current?.open();
    }
    async function buttonPressed() {
        generationsSheet.current?.open();
    }

    async function selectedGenerationPressed(genNumber: number) {
        genNumber
            ? fetchGeneration(genNumber).then((result: Generation) => {
                  setPokemonList(result.pokemon_species);
                  generationsSheet.current?.close();
              })
            : null;
    }

    async function pokemonCardPressed(url: string) {
        const pokemonNumber = url.split('/').slice(-2)[0];
        url
            ? fetchSearchedPokemon(pokemonNumber).then(
                  (result: PokemonData) => {
                      setPokemonInfo(result);
                      pokemonSheet.current?.open();
                  },
              )
            : null;
    }

    useEffect(() => {
        fetchAllPokemon().then(fetched => {
            const allPokemon: Result[] = fetched.results;
            setPokemonList(allPokemon);
        });
    }, []);



    return (
        <SafeAreaView>
            <View style={styles.mainScreen}>
                <View style={styles.generationButton}>
                    <TouchableHighlight onPress={() => buttonPressed()}>
                        <Image
                            source={require('./assets/img/GenerationIcon.png')}
                        />
                    </TouchableHighlight>
                </View>
                <HomeScreen onClick={() => searchBarPressed()} />
                <View style={styles.divider} />
                <AllPokemonList
	                pokemonResults={getPokemonList ?? []}
	                cardPressed={(url: string) => {pokemonCardPressed(url)}}
                />

                <BottomSheet
                    ref={searchSheet}
                    height={'80%'}
                    style={{backgroundColor: backgroundColors.generations}}>
                    <PokedexSearchScreen
                        onClick={(value: PokemonData) => {
                            setPokemonInfo(value);
                            searchSheet.current?.close();
                            pokemonSheet.current?.open();
                        }}
                    />
                </BottomSheet>
                <BottomSheet
                    ref={generationsSheet}
                    height={'100%'}
                    style={{backgroundColor: 'white'}}>
                    <ScrollView>
                        <View style={styles.genSheet}>
                            <GenerationsSheet
                                onClick={(gen: number) => {
                                    selectedGenerationPressed(gen);
                                }}
                            />
                        </View>
                    </ScrollView>
                </BottomSheet>
                <BottomSheet ref={pokemonSheet} height={'50%'}>
                    <PokedexStatScreen pokemonInfo={getPokemonInfo} />
                </BottomSheet>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
	mainScreen: {
		height: '100%',
		width: '100%',
	},
	generationButton: {
		marginTop: 8,
		marginEnd: 8,
		alignItems: 'flex-end',
		resizeMode: 'contain',
	},
	container: {
		marginTop: StatusBar.currentHeight || 0,
	},
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
	divider: {
		borderBottomColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	genSheet: {
		paddingBottom: 80,
	}
});
export default App;
