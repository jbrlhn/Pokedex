import {StyleSheet, Text, View} from 'react-native';
import { backgroundColors } from '../assets/colors.js';

export const TypePill = ({text, background}: {text?: string, background?: string}) => {
	const pokemonType = (type: string | undefined) => {
		return backgroundColors[type as keyof typeof backgroundColors];
	};
	return (
		<View style={{...styles.pill, backgroundColor: pokemonType(background)}}>
			<Text style={styles.pillText}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	pill: {
		borderRadius: 16,
		padding: 8,
		marginTop: 8,
		marginEnd: 16,
		elevation: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	pillText: {
		color: 'white',
		justifyContent: 'center',
		fontSize: 16,
		fontWeight: 'bold'
	}
})