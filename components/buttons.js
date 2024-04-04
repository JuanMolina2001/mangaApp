import { TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native"
export const ChaptersBtn = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('Lector', { id: data.id })}} style={styles.button}>
      <View>
      <Text numberOfLines={2} style={[styles.text, styles.textLeft]}>{data.title}</Text>
      <Text style={styles.text}>{data.scan}</Text>
      </View>
      <Text style={styles.text}>{data.lenguage}</Text>
    </TouchableOpacity>
  )
}
 const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#131313B8"
    },
    text: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.459)',

    },
    textLeft: {
        width: 200,
        color: '#ffffff',
    },
})