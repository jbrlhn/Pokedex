import {
	Button,
	SafeAreaView,
	ScrollView, StatusBar,
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
import { fetchAllPokemon } from './pokemonrequests/SearchPokemon';
import { AllPokemon, Result } from './pokemonrequests/AllPokemon';

function App(): React.JSX.Element {

	const searchSheet = useRef<BottomSheetMethods>(null);
	const generationsSheet = useRef<BottomSheetMethods>(null);
	const pokemonSheet = useRef<BottomSheetMethods>(null);
	const [getPokemonInfo, setPokemonInfo] = useState<PokemonData | null>(null);
	const [getPokemonList, setPokemonList] =useState([]);

	async function searchBarPressed() {
		searchSheet.current?.open();
	}
	async function buttonPressed() {
		generationsSheet.current?.open();
	}


	useEffect(() => {
		fetchAllPokemon().then((fetched) => {
			const allPokemon= fetched.results
			allPokemon.forEach((poke: Result) => {
				console.log(poke.name)
			});
			setPokemonList(allPokemon)
		})
	}, []);


	return (
		<SafeAreaView>
			<View style={styles.mainScreen}>
				<ScrollView nestedScrollEnabled={true}>
					<HomeScreen onClick={() => searchBarPressed()}/>
					<Button title={'Generations'} onPress={ () => buttonPressed()}/>
				</ScrollView>
				<BottomSheet ref={searchSheet} height={'80%'} style={{backgroundColor: backgroundColors.generations}}>
					<PokedexSearchScreen  onClick={(value: PokemonData) => {
						setPokemonInfo(value)
						searchSheet.current?.close();
						pokemonSheet.current?.open();
					}}/>
				</BottomSheet>
				<BottomSheet ref={generationsSheet} height={'80%'} style={{backgroundColor:'white'}}>
					<GenerationsSheet/>
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
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	cards: {
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16
	},
	name: {
		fontSize: 32
	}
});
export default App;
