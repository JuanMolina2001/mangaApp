import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import { styles } from './styles'
import { ChaptersBtn } from '../../components/buttons'
import { PlusCircle, PlusCircleFill } from '../../components/svgComponents';
import WebScraping from '../../components/webScraping';
import scripts from '../../scripts';
import json from '../../chapters.json'

export default function MangaPage({ route, navigation }) {
  const { data } = route.params;
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: data.title || ''
    })
    console.log(data)
  }, [])
  useEffect(() => {
    console.log(mangaData)
  }, [mangaData])
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.info}>
        <Image source={{ uri: data.image }} style={styles.image}>
        </Image>
      </View>

      {mangaData.length <= 0 ?
        <WebScraping uri={`https://visortmo.com/library/manga/${data.id}`} data={mangaData} setData={setMangaData} js={scripts.getChapters}></WebScraping>
        :
        <FlatList
          data={mangaData.chapters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Button title={item.name} />}
          numColumns={1} />
      }

    </View>
  )
}