import { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { mangaCardStyles } from './styles'
import { useNavigation } from '@react-navigation/native';
export const MangaCard = ({ data, numColumns}) => {
  const navigation = useNavigation();
  const [styles, setStyles] = useState({})
  const dataToSend={
    title:data.title,
    image:data.image,
    id: data.id,
  }
  useEffect(() => {
    if (numColumns === 1) {
      setStyles(mangaCardStyles.stylesCol1)

    } else {
      setStyles(mangaCardStyles.stylesCol2)
    }
  }, [numColumns])
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
          numberOfLines={1} ellipsizeMode="tail"
          style={mangaCardStyles.textStyles.title}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
