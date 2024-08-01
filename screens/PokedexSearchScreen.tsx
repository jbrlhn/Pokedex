import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton.tsx';
import {useState} from 'react';

export default function PokedexSearchScreen(
	{onSearchPokemon}: { onSearchPokemon: (inputValue: string) => void; }
) {
	const [inputValue, setInputValue] = useState('');
	function pokemonInputHandler(inputText: string) {
		setInputValue(inputText);
	}

	function resetPokemonInputHandler() {
		setInputValue('');
	}

	function confirmInputHandler() {
		onSearchPokemon(inputValue);
	}

	return (
		<View>
			<View style={styles.searchBox}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.searchInput}
						maxLength={25}
						autoCorrect={false}
						autoCapitalize={'words'}
						onChangeText={pokemonInputHandler}
						value={inputValue}
					/>
				</View>
			</View>
			<View style={styles.searchButton}>
				<View style={styles.buttonContainer}>
					<PrimaryButton
						onPress={resetPokemonInputHandler}
						buttonName={'Clear'}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton buttonName={'Search'} onPress={confirmInputHandler} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		margin: 2,
		padding: 32,
		borderRadius: 8,
		backgroundColor: '#084035',
		elevation: 8,
		shadowColor: 'black',
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 4,
		shadowOpacity: 0.25,
	},
	searchInput: {
		height: 50,
		fontSize: 32,
		borderBottomColor: '#ffde00',
		borderBottomWidth: 2,
		color: '#ffde00',
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'justify',
	},
	searchButton: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
	searchBox: {
		marginTop: 64,
		marginHorizontal: 16,
		padding: 16,
		backgroundColor: '#dcd7d6',
		borderRadius: 16,
	},
	stats: {
		fontSize: 32,
		color: '#dcd7d6',
		textAlign: 'center',
	},
});
