import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
const url = 'https://lqmm17t0-3000.brs.devtunnels.ms/'
async function getMangas(location) {


    try {

        const data = await fetch(`${url}getMangas/${location}`)
        if (data.status !== 200) {
            throw new Error('Error: ', data.status, ' ', data.statusText)
        }
        const json = data.json()

        return json
    }
    catch (error) {
        throw error
    }

}
export async function getChapter(id) {
    try {
        const data = await fetch(`${url}getChapter/${id}`)
        if (data.status !== 200) {
            throw new Error('Error: ', data.status, ' ', data.statusText)
        }
        const json = data.json()
        return json

    } catch (error) {
        throw error
    }
}
async function searchManga(search) {
    try {
        const data = await fetch(`${url}searchManga/${search}`)
        if (data.status !== 200) {
            throw new Error('Error: ', data.status, ' ', data.statusText)
        }
        const json = data.json()
        return json
    } catch (error) {
        throw error
    }
}
export function getData(setData) {
    AsyncStorage.getItem('mangasStorage')
        .then((data) => {
            if (data) {
                const parsedData = JSON.parse(data);
                setData(parsedData);
            } else {
                return getMangas(1)
                    .then((newData) => {
                        AsyncStorage.setItem('mangasStorage', JSON.stringify(newData));
                        setData(newData);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

export function search(search, setData, setEnable) {
    setEnable(false)
    searchManga(search)
        .then((data) => setData(data))
        .catch((error) => console.log(error))
        .finally(() => setEnable(true));

}
export function getMangaData(id, setData) {
    AsyncStorage.getItem(`chapterStorage${id}`)
        .then((data) => {
            if (data) {
                const parsedData = JSON.parse(data);
                setData(parsedData);
            } else {
                return getChapter(id)
                    .then((newData) => {
                        AsyncStorage.setItem(`chapterStorage${id}`, JSON.stringify(newData));
                        setData(newData);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export function isFavorite(id, setFavorite) {
    AsyncStorage.getItem(`favorite${id}`)
        .then((data) => {
            if (data) {
                setFavorite(true)
            } else {
                setFavorite(false)
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
export function favortieToggle(data, favorite, setFavorite,setDisaled) {
    setDisaled(true)
   if(favorite){
    AsyncStorage.removeItem(`favorite${data.id}`).then(() => 
    setFavorite(false)
    ).finally(() => {
        setDisaled(false)
        ToastAndroid.show('Eliminado de favoritos', ToastAndroid.SHORT);
    })
   }else{
    AsyncStorage.setItem(`favorite${data.id}`, JSON.stringify(data))
    .then(() => setFavorite(true))
    .finally(() => {
        setDisaled(false)
        ToastAndroid.show('Agregado a favoritos', ToastAndroid.SHORT);
    })
   }
}