import React, { useEffect } from 'react'
import { View, ActivityIndicator,BackHandler } from 'react-native'
import WebView from 'react-native-webview'

export default function Reader({ route}) {
  const { id } = route.params;
  return (
    

    <WebView
      source={{ uri: `https://mangadex.org/chapter/${id}` }}
      style={{ flex: 1 }}
    />


  )
}
