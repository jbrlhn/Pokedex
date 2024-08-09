import {PokemonData} from '../pokemonrequests/PokemonData.tsx';
import PokemonCard from '../components/PokemonCard';
import { Animated, View } from 'react-native';
import ScrollView = Animated.ScrollView;

export default function PokedexStatScreen({pokemonInfo}: {pokemonInfo: PokemonData | null}
) {
    return (
        <View>
            <ScrollView>
                <PokemonCard pokemonInfo={pokemonInfo}/>
            </ScrollView>
        </View>
    );
}

