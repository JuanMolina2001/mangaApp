import { StyleSheet } from 'react-native';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
export const MangaCard = ({ data}) => {
  const navigation = useNavigation();
  const dataToSend={
    title:data.title,
    image:data.image,
    id: data.id,
  }
  return (

    <TouchableOpacity
    onPress={() => { navigation.navigate('Manga', { data:  dataToSend});}}
      style={styles.card}>
      <Image
        source={{ uri: data.image }}
        resizeMode={"stretch"}
        style={styles.image}
      />
      <View style={styles.content} >
        <Text
          numberOfLines={1} 
          style={styles.title}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const  styles = StyleSheet.create({
    title: {
      color: "#FFFFFF",
      fontSize: 16,
      marginBottom: 29,
    },
    subTitle: {
       fontSize: 10,
        color: "#FFFFFF"
    },
    card: {

        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: "#131313B8",
        borderRadius: 10,
        width: 150,
        height: 250,
        overflow: 'hidden',
    },
    image:
    {
        width: 150,
        height: 200,
    },
    content: {
        color: "#FFFFFF",
        paddingHorizontal: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 170,
    }
})