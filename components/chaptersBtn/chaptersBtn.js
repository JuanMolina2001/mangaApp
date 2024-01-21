import React, { useEffect } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
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
