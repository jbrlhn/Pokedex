import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton.tsx';
import { useState } from 'react';
import { PokemonData } from '../pokemonrequests/PokemonData.tsx';
import { fetchSearchedPokemon } from '../pokemonrequests/SearchPokemon.tsx';
import CustomModal from '../components/CustomModal';


type SearchScreenProps = {
  onClick: (getPokemon: PokemonData) => void;
};
export default function PokedexSearchScreen({onClick}: SearchScreenProps) {

	const [inputValue, setInputValue] = useState('');

	const [modalVisible, setModalVisible] = useState(false);

	function pokemonInputHandler(inputText: string) {
		setInputValue(inputText);
	}

	function resetPokemonInputHandler() {
		setInputValue('');
	}


	async function confirmInputHandler() {
		if (inputValue != '') {
			fetchSearchedPokemon(inputValue.toLowerCase()).then(result => {
				if (result!= null) {
					resetPokemonInputHandler();
					onClick(result)
				} else {
					setModalVisible(true)
				}
			})
		}
	}

	return (
		<View>
			<View>
				<View style={styles.searchBox}>
					<View style={styles.inputContainer}>
					<TextInput
						style={{...styles.searchInput}}
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
						<PrimaryButton
						buttonName={'Search'}
						onPress={confirmInputHandler}
						/>
					</View>
				</View>
				{modalVisible ? <CustomModal message={'Couldn\'t find this Pokemon. Try again.'} buttonText={'OK'} onClose={() =>
					setModalVisible(false)}/> : null}
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
		fontFamily: 'Prompt-Italic',
		fontSize: 32,
		borderBottomColor: '#ffde00',
		borderBottomWidth: 2,
		color: '#ffde00',
		marginVertical: 8,
		paddingVertical: 8,
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
	bottomSheet: {
	},
	testText: {
		fontFamily: 'Prompt-Italic',
		fontSize: 28
	},
	testText2: {
		fontFamily: 'Prompt-Light',
		fontSize: 28
	}
});
