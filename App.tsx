import {
	Button, FlatList, Pressable,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import GenerationsSheet from './screens/GenerationsSheet';
import HomeScreen from './screens/HomeScreen';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import PokedexSearchScreen from './screens/PokedexSearchScreen';
import { backgroundColors } from './assets/colors';
import { PokemonData } from './pokemonrequests/PokemonData';
import PokedexStatScreen from './screens/PokemonStatScreen';
import { fetchAllPokemon, fetchSearchedPokemon } from './pokemonrequests/SearchPokemon';
import { Result } from './pokemonrequests/AllPokemon';
import { fetchGeneration } from './pokemonrequests/Generations';
import { Generation } from './pokemonrequests/GenerationsInterface';

function App(): React.JSX.Element {

	const searchSheet = useRef<BottomSheetMethods>(null);
	const generationsSheet = useRef<BottomSheetMethods>(null);
	const pokemonSheet = useRef<BottomSheetMethods>(null);
	const [getPokemonInfo, setPokemonInfo] = useState<PokemonData | null>(null);
	const [getPokemonList, setPokemonList] =useState<Result[]>();

	async function searchBarPressed() {
		searchSheet.current?.open();
	}
	async function buttonPressed() {
		generationsSheet.current?.open();
	}

	async function selectedGenerationPressed(genNumber: number) {
		genNumber?
		fetchGeneration(genNumber).then((result: Generation) => {
			setPokemonList(result.pokemon_species);
			generationsSheet.current?.close();
		}) : null
	}

	async function pokemonCardPressed(url: string) {
		const pokemonNumber = url.split('/').slice(-2)[0];
		url?
		fetchSearchedPokemon(pokemonNumber).then((result: PokemonData) => {
		setPokemonInfo(result);
		pokemonSheet.current?.open();
		}): null
	}

	useEffect(() => {
		fetchAllPokemon().then((fetched) => {
			const allPokemon: Result[] = fetched.results
			setPokemonList(allPokemon)
		})
	}, []);

	const AllPokemonList = () => {
		return(
			<View style={styles.pokemonList}>
				<FlatList
					data={getPokemonList}
					renderItem={({item}) =>
						<Pressable style={styles.card} onPress={() => {pokemonCardPressed(item.url ?? '')}}>
							<Text style={styles.name}>{`${item.name}`}</Text>
						</Pressable>
				}
				/>
			</View>
		);
	}

	return (
		<SafeAreaView>
			<View style={styles.mainScreen}>

				<Button title={'Generations'} onPress={ () => buttonPressed()}/>
				<HomeScreen onClick={() => searchBarPressed()}/>
				{AllPokemonList()}

				<BottomSheet ref={searchSheet} height={'80%'} style={{backgroundColor: backgroundColors.generations}}>
					<PokedexSearchScreen  onClick={(value: PokemonData) => {
						setPokemonInfo(value)
						searchSheet.current?.close();
						pokemonSheet.current?.open();
					}}/>
				</BottomSheet>
				<BottomSheet ref={generationsSheet} height={'80%'} style={{backgroundColor:'white'}}>
					<GenerationsSheet onClick={(gen: number) => {
						selectedGenerationPressed(gen);
					}}/>
				</BottomSheet>
				<BottomSheet ref={pokemonSheet} height={'50%'}>
					<PokedexStatScreen pokemonInfo={getPokemonInfo}/>
				</BottomSheet>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainScreen: {
		height: '100%',
		width: '100%',
		padding: 16
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
	},
	card: {
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 8,
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: 16,
		borderWidth: 1,
		margin: 8,
	},
});
export default App;
