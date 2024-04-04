import { FlatList, View, TextInput, ActivityIndicator } from 'react-native';
import { MangaCard } from '../../components/mangaCard';
import styles from './styles'
import { useState } from 'react';
import WebScraping from '../../components/webScraping';
import scripts from '../../scripts.js'
import json from '../../data.json'
export default function MangaList() {
  const [data, setData] = useState([])
  const [searchData, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const setMangas = (newData) => {
    setData([...data,...newData])
  }
  // const search = (text) => {
  //   constquery = text.split(' ').join('+')
  //   setUrl(`https://visortmo.com/library?order_item=likes_count&order_dir=desc&title=${text}&_pg=1&filter_by=title&type=&demography=&status=&translation_status=&webcomic=&yonkoma=&amateur=&erotic=`)
  // }
  return (
    <View style={styles.container}>
      <FlatList
        ListFooterComponent={<ActivityIndicator size="large" color="white" />}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MangaCard key={item.id} data={item} />}
        numColumns={2}
        onEndReached={() => {
          setPage(page + 1)
        }}
      />
      <WebScraping
        uri={`https://visortmo.com/library?_pg=1&page=${page}`}
        js={scripts.getMangas}
        setData={setMangas}
        data={data}
      />
    </View>
  )
}