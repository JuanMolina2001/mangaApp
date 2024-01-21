import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        height: 200,
    },
    image: {
        marginTop: 20,
        width: '50%',
        height: "80%",
        resizeMode: 'contain'
    },
    categories: {
        marginTop: 20,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 22,

    },
    spinner: {
        marginTop: "40%",

    },
    btnMenu: {
        height: 30,
        width: 30,
        alignItems: 'center',
        backgroundColor: "black",
        borderRadius: 4,
        marginBottom: 10,
    }
})