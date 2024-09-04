import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { backgroundColors, colors, textColor } from '../assets/colors.js';

type HomeScreenProps = {
	onClick: () => void;
}

export default function HomeScreen({onClick}: HomeScreenProps) {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Pokédex</Text>
			<Text style={styles.description}>Search for Pokémon by name or using the National Pokédex number.</Text>
			<TouchableOpacity onPress={onClick}>
				<View style={styles.inputContainer}>
					<View style={styles.inputRow} >
						<Image source={require('../assets/img/Search.png')} />
						<Text style={styles.hint}>What Pokémon are you looking for?</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingBottom: 8,
		padding: 16
	},
	inputContainer: {
		height: 40,
		borderRadius: 8,
		backgroundColor: backgroundColors.defaultInput,
		elevation: 1,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 1,
		shadowOpacity: 0.1,
	},
	inputRow: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingStart: 8
	},
	hint: {
		color: colors.dark,
		textAlign: 'center',
		textDecorationColor: backgroundColors.card,
		paddingStart: 8
	},
	title: {
		fontFamily: 'SFProTextBold',
		fontSize: 32,
		color: textColor.black,
		paddingBottom: 12
	},
	description: {
		fontFamily: 'SFProTextMedium',
		fontSize: 12,
		color: textColor.grey,
		paddingBottom: 12,
		paddingEnd: 32
	},
	background: {
		resizeMode: 'cover',
		width: '100%',
	}
});