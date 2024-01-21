import { StyleSheet } from 'react-native';
export const  mangaCardStyles ={

 textStyles : StyleSheet.create({
    title: {
      color: "#FFFFFF",
      fontSize: 16,
      marginBottom: 29,
    },
    subTitle: {
       fontSize: 10,
        color: "#FFFFFF"
    },
  }),

 stylesCol2 : StyleSheet.create({
    card: {

        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: "#131313B8",
        borderRadius: 10,
        width: 150,
        height: 250,
        overflow: 'hidden',
    },
    image:
    {
        width: 150,
        height: 200,
    }
}),
 stylesCol1 : StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#131313B8",
        borderRadius: 10,
        marginBottom: 49,

    },
    image: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 100,
        height: 150,
        marginRight: 16,
    },
    content: {
        color: "#FFFFFF",
        margin: 16,
        width: 170,
    }
}),
}

