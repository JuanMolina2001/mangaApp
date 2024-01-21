import { FlatList, View, Button, TextInput, ActivityIndicator } from 'react-native';
import { MangaCard } from '../../components/mangaCard/mangaCard';
import styles from './styles'
import { useState, useEffect } from 'react';
import { getData, search } from '../../services/dexService';

export default function MangaList({ navigation, route }) {
    const { title } = route.params;
    const [numColumns, setNumColumns] = useState(2)
    const [data, setData] = useState([])
    const [searchData, setSearch] = useState('')
    const [enable, setEnable] = useState(true)



    const toggleColumns = () => {
        setNumColumns(numColumns === 1 ? 2 : 1);
    };
    useEffect(() => {
        navigation.setOptions({
            title: title || ''

        })
        if (title === 'MangaDex') {
            getData(setData)
        }else if(title === 'TMO'){
            return
        }else if (title === 'MangaPlus'){
            return
        }
    }, [])


    return (


        <View style={styles.container}>
            {enable ?
                (<><TextInput  style={styles.search} onChangeText={(text) => setSearch(text)} onSubmitEditing={() => { 
                    if (title === 'MangaDex') {
                        search(searchData, setData,setEnable)
                    }else if(title === 'TMO'){
                        return
                    }
                    }}></TextInput>


                    <FlatList
                        key={numColumns}
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <MangaCard key={item.id} data={item} numColumns={numColumns} />}
                        numColumns={numColumns} />
                    <Button
                        title={`Cambiar a ${numColumns === 1 ? 2 : 1} columna(s)`}
                        onPress={toggleColumns}
                    /></>)
                :
                <ActivityIndicator size="large" color="white"  />
            }
        </View>



    )
}



