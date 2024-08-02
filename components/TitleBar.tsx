import {StyleSheet, Text, View} from 'react-native';

export default function TitleBar({title}: {title: string | undefined}) {
  return (
    <View style={styles.bar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ddb52f'
  },
});
