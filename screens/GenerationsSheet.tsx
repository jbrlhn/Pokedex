import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GenerationsCard from '../components/GenerationsCard';
import { backgroundColors, textColor } from '../assets/colors';

type GenerationSheetProps = {
	onClick: (gen: number) => void;
};

export default function GenerationsSheet({onClick}: GenerationSheetProps) {

	let generations = [];

	let imgPath = [
		require(`../assets/img/Generation1.png`),
		require(`../assets/img/Generation2.png`),
		require(`../assets/img/Generation3.png`),
		require(`../assets/img/Generation4.png`),
		require(`../assets/img/Generation5.png`),
		require(`../assets/img/Generation6.png`),
		require(`../assets/img/Generation7.png`),
		require(`../assets/img/Generation8.png`),
	];

	// Display all Pokémon types
	for (let type = 0; type < imgPath.length; type++) {
		generations.push(
			<TouchableOpacity key={type} onPress={() => onClick(type + 1)} style={styles.item}>
				<View key={type}>
					<GenerationsCard genLocation={imgPath[type]} genNum={type}/>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<SafeAreaView>
			<View style={styles.screen}>
				<Text style={styles.title}>Generations</Text>
				<Text>Use search for generations to explore your Pokémon!</Text>
				<View style={styles.container}>
					{generations}
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		height: '100%',
		width: '100%',
		padding: 8,
		backgroundColor: 'white'
	},
	title: {
		fontFamily: 'SFProTextBold',
		fontSize: 32,
		color: textColor.black
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start'
	},
	item: {
		width: '50%',
		height: 150,
	},
	description: {
		fontFamily: 'SFProTextBold',
		fontSize: 16,
		color: textColor.grey
	},
	button: {
		flex: 1
	},
	genSelected: {
		opacity: 0.5,
		backgroundColor: backgroundColors.generations
	}
});