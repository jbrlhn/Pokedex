import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { backgroundColors } from '../assets/colors.js';

export default function GenerationsCard({genLocation, genNum}: {genLocation: any, genNum: number}) {
	return(
		<View style={styles.card}>
			<ImageBackground
				style={styles.background}
				source={require('../assets/img/BottomHalfPokeball.png')}
				imageStyle={{opacity: 0.7}}>
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
		resizeMode: 'contain',
		borderRadius: 24
	}
});