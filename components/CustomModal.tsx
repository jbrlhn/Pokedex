import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import { backgroundColors, colors, textColor } from '../assets/colors.js';


export default function CustomModal(
	{message, buttonText, onClose}:{message: string, buttonText: string, onClose: () => void}
) {
	// const [modalVisible, setModalVisible] = useState(false);
	return(
		<View style={styles.centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={true}
				onRequestClose={() => {
					onClose();
				}}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>{message}</Text>
						<Pressable style={styles.button} onPress={() => {
							onClose();
						}}>
							<Text style={styles.button}>{buttonText}</Text>
						</Pressable>
					</View>
				</View>

			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		padding: 10,
		fontFamily: 'SFProTextMedium',
		fontSize: 18,
		color: textColor.blue
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
		fontFamily: 'SFProTextMedium',
		fontSize: 18,
	}
})