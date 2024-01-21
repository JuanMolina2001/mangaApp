import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getMangaData, isFavorite, favortieToggle } from '../../services/dexService'
import { styles } from './styles'
import { ChaptersBtn } from '../../components/chaptersBtn/chaptersBtn'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlusCircle, PlusCircleFill } from '../../components/svgComponents';

export default function Manga({ route, navigation }) {
  const { data } = route.params;
  const [mangaData, setMangaData] = useState();
  const [favorite, setFavorite] = useState(false);
  const [disabled, setDisaled] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: data.title || ''
    })
    getMangaData(data.id, setMangaData);
    isFavorite(data.id, setFavorite);
  }, [favorite])
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.info}>
        <Image source={{ uri: data.image }} style={styles.image}>
        </Image>
        {mangaData ?
          (
            <View>
              <Text numberOfLines={5} style={styles.categories}>
                {mangaData.categories?.map((item, index) => {
                  return (index !== mangaData.categories.length - 1) ? item + "\n" : item;
                })}
              </Text>
            </View>) : null
        }



      </View>

      {mangaData ?
        <>
          <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 50 }}>
            <TouchableOpacity disabled={disabled} style={styles.btnMenu} onPress={() => { favortieToggle(data, favorite, setFavorite, setDisaled) }}>
              {favorite ? <PlusCircleFill
                height={30}
                width={30}
                fill={'white'}
              >

              </PlusCircleFill> :
                <PlusCircle
                  height={30}
                  width={30}
                  fill={'white'}
                ></PlusCircle>}
            </TouchableOpacity>
          </View>
          <FlatList
            data={mangaData.chapters}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ChaptersBtn data={item}></ChaptersBtn>}
            numColumns={1} /></>
        : <ActivityIndicator size="large" color='white' style={styles.spinner} />
      }
    </View>
  )
}
