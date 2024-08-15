import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import GenerationsSheet from './screens/GenerationsSheet';
import HomeScreen from './screens/HomeScreen';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import PokedexSearchScreen from './screens/PokedexSearchScreen';
import { backgroundColors } from './assets/colors';

function App(): React.JSX.Element {

	const sheetRef = useRef<BottomSheetMethods>(null);


	async function searchBarPressed() {
		sheetRef.current?.open();
	}

	return (
		<View style={styles.mainScreen}>
			<SafeAreaView>
				<View>
				<ScrollView nestedScrollEnabled={true}>
					<HomeScreen onClick={() => searchBarPressed()}/>
	                <GenerationsSheet/>
				</ScrollView>
				<BottomSheet ref={sheetRef} height={'80%'} style={{backgroundColor: backgroundColors.generations}}>
					<PokedexSearchScreen />
				</BottomSheet>
				</View>
			</SafeAreaView>
        </View>
	);
}

const styles = StyleSheet.create({
  mainScreen: {
	  flex: 1,
  },
});
export default App;
