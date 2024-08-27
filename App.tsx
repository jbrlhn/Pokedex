import {
	Button, FlatList,
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
import { fetchAllPokemon } from './pokemonrequests/SearchPokemon';
import { Result } from './pokemonrequests/AllPokemon';

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
					renderItem={({item}) => <Text style={styles.name}>{item.name}</Text>}
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
		marginTop: StatusBar.currentHeight || 0,
	},
	pokemonList: {
		flex: 1,
		marginBottom: 8
	},
	name: {
		fontSize: 32
	}
});
export default App;
