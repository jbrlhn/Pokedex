import {PokemonData} from '../pokemonrequests/PokemonData.tsx';
import PokemonCard from '../components/PokemonCard';
import {View} from 'react-native';
import AboutTab from './stats/AboutTab';
import StatsTab from './stats/StatsTab';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import EvolutionTab from './stats/EvolutionTab';

export default function PokedexStatScreen({
    pokemonInfo
}: {
    pokemonInfo: PokemonData | null;
}) {
    return (
        <View>
            <PokemonCard pokemonInfo={pokemonInfo} />
            <MyTabs pokemonInfo={pokemonInfo} />
        </View>
    );
}

interface MyTabsProps {
    pokemonInfo?: PokemonData | null;
}

function MyTabs({pokemonInfo}: MyTabsProps) {
    const Tab = createMaterialTopTabNavigator();
    return (
        <NavigationContainer>
            <View style={{flex: 1, minHeight: 1000}}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarIndicatorStyle: {
                            backgroundColor: 'red',
                            height: 4,
                        },
                    }}>
                    <Tab.Screen name="About">
                        {() => <AboutTab pokemonInfo={pokemonInfo ?? null} />}
                    </Tab.Screen>
                    <Tab.Screen name="Stats"
                                component={StatsTab} />
                    <Tab.Screen name="Evolution" component={EvolutionTab} />
                </Tab.Navigator>
            </View>
        </NavigationContainer>
    );
}
