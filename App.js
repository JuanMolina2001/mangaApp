import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import MangasList from './screens/manglist/mangaList';
import Manga from './screens/manga/manga';
import Reader from './screens/reader/reader';
import Extensions from './screens/extensions/extensions';
const Stack = createStackNavigator();


export default function App() {

  return (

    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer theme={styles.MyTheme}>
        <ImageBackground
          source={require('./assets/images/liquid-cheese.png')}
          resizeMode={'stretch'}
          style={{ flex: 1, backgroundColor: 'black' }}>
          <Stack.Navigator initialRouteName="Extensiones">
            <Stack.Screen options={styles.header} name="MangaList" component={MangasList} />
            <Stack.Screen options={styles.header} name="Manga" component={Manga} />
            <Stack.Screen options={styles.header} name="Lector" component={Reader} />
            <Stack.Screen options={styles.header} name="Extensiones" component={Extensions} />
          </Stack.Navigator>
        </ImageBackground>
      </NavigationContainer>
    </SafeAreaProvider>


  );
}

const styles = {
  header: {
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {

    }
  },
  noHeader: {
    headerShown: false,
  },
  MyTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#14141400'
    },
  },


};