import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { backgroundColors } from '../assets/colors.js';

export default function GenerationsCard({genLocation, genNum}: {genLocation: any, genNum: number}) {
	console.log(genLocation)
	return(
		<View style={styles.card}>
			<ImageBackground
				style={styles.background}
				source={require('../assets/img/10x5.png')}
				imageStyle={{opacity: 0.1}}>
				<View style={styles.content}>
					<Image
						style={styles.image}
						source={genLocation}
					/>
				</View>
				<Text style={styles.title}>Generation {genNum+1}</Text>
			</ImageBackground>
		</View>
	);
}


const styles = StyleSheet.create({
	card: {
		flex: 1,
		height: 120,
		borderRadius: 24,
		backgroundColor: backgroundColors.card,
		margin: 8,
	},
	content: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: '95%',
		resizeMode: 'contain',
	},
	title: {
		fontFamily: 'SFProTextMedium',
		paddingBottom: 8,
		textAlign: 'center',
		justifyContent: 'center'
	},
	background: {
		flex: 1,
		alignContent: 'flex-start',
		borderRadius: 24,
		margin: 8
	}
});