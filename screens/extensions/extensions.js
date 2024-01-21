import React, { useEffect } from 'react'
import { FlatList, View, TouchableOpacity, Text,Image } from 'react-native'
import {styles} from './styles'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Extensions  ()  {
  const navigate = useNavigation()
  const data=  [
    {title:'MangaDex', image:require( '../../assets/images/MangaDex.webp')},
    {title:'TMO',image:require('../../assets/images/TMO.png')},
    {title:'MangaPlus',image:require('../../assets/images/MangaPlus.png')},
    {title:'MangaDex',image:require('../../assets/images/MangaDex.webp')},
    {title:'TMO',image:require('../../assets/images/TMO.png')},
    {title:'MangaPlus',image:require('../../assets/images/MangaPlus.png')},
    {title:'MangaDex',image:require('../../assets/images/MangaDex.webp')},
    {title:'TMO',image:require('../../assets/images/TMO.png')},
    {title:'MangaPlus',image:require('../../assets/images/MangaPlus.png')},
    {title:'MangaDex',image:require('../../assets/images/MangaDex.webp')},
    {title:'TMO',image:require('../../assets/images/TMO.png')},
    {title:'MangaPlus',image:require('../../assets/images/MangaPlus.png')}]
    const clearData = () => {
      AsyncStorage.clear()
    }
    // useEffect(() => {
    //   clearData()
    //   }, [])
  return (
    <View>
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => 
            <TouchableOpacity
              onPress={() => navigate.navigate('MangaList', { title: item.title })}
             style={styles.extension}>
              <Image style= {{height: 50, width: 50}}  source={item.image}></Image>
              <Text style={{marginLeft:'20%',color:'white'}}>{item.title}</Text>
            </TouchableOpacity>}
            numColumns={1} 
            />
    </View>
  )
}
