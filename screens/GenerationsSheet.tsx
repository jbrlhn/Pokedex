import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GenerationsCard from '../components/GenerationsCard';
import { textColor } from '../assets/colors';




export default function GenerationsSheet() {

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
			<View key={type} style={styles.item}>
				<GenerationsCard genLocation={imgPath[type]} genNum={type}/>
			</View>
		)
	}

	return (
		<View style={styles.screen}>
			<SafeAreaView>
					<Text style={styles.title}>Generations</Text>
					<Text>Use search for generations to explore your Pokémon!</Text>
					<View style={styles.container}>
						{generations}
					</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
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
	}
});