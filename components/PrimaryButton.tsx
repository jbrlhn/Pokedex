import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function PrimaryButton({
  buttonName,
  onPress,
}: {
  buttonName: string;
  onPress: () => void;
}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: '#209ebe'}}>
        <Text style={styles.buttonText}>{buttonName}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonOuterContainer: {
    padding: 16,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#22c4ea',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    justifyContent: 'center'
  },
  pressed: {
    opacity: 0.75,
  },
});
