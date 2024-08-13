import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GenerationsCard from '../components/GenerationsCard';
import { backgroundColors } from '../assets/colors';



export default function HomeScreen() {

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
		<SafeAreaView>
			<View style={styles.screen}>
				<Text style={styles.title}>Generations</Text>
				<View style={styles.container}>
					{generations}
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 8,
		backgroundColor: backgroundColors.generations
	},
	title: {
		fontFamily: 'SFProTextBold',
		fontSize: 32,
		color: 'white'
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start'
	},
	item: {
		width: '50%',
		height: 150,
	}
});