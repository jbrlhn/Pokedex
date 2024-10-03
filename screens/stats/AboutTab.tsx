import { View, Text, Animated, StyleSheet } from 'react-native';
import { PokemonData } from '../../pokemonrequests/PokemonData';
import ScrollView = Animated.ScrollView;
import { PokemonTypeColor } from '../../components/PokemonTypeColor';


export default function AboutTab({pokemonInfo}: {pokemonInfo: PokemonData | null}) {
	return (
		<View style={styles.aboutContent}>
			<ScrollView style={{flex: 1}}>
				<Text style={{
					fontSize: 24,
					fontWeight: 'bold',
					color: PokemonTypeColor(pokemonInfo?.types[0]?.type.name) ?? 'black',
					paddingBottom: 8}}>Pokédex Data
				</Text>
				<StatRow aboutLabel={'Height'} aboutStat={pokemonInfo?.height}/>
				<StatRow aboutLabel={'Weight'} aboutStat={pokemonInfo?.weight}/>
			</ScrollView>
		</View>
	);
}


const StatRow = ({aboutLabel, aboutStat}: {aboutLabel?: string, aboutStat?: string | number}) => {
	return (
        <View style={styles.stat}>
            <Text style={styles.label}>{aboutLabel}:</Text>
            <Text style={styles.value}> {aboutStat}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
	aboutContent: {
		flex: 1,
		backgroundColor: 'white',
		padding: 16,
	},
	stat: {
		flexDirection: 'row',
		paddingBottom: 8,
		alignItems: 'center',
	},
	label: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	value: {
		fontSize: 16
	}
})






