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
		height: 50,
		borderRadius: 24,
		paddingVertical: 8,
		elevation: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 3
	},
	pillText: {
		color: 'white',
		justifyContent: 'center',

	}
})