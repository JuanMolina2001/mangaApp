import React from 'react'
import WebView from 'react-native-webview';
const WebScraping = ({  uri, js, setData, data}) => {
    console.log(uri);
    return (
        <WebView
            style={{ display: 'none', position: 'absolute', zIndex: -1, flex: 0, width: 0, height: 0}}
            source={{ uri: uri }}
            injectedJavaScript={js}
            onMessage={(event) => {
                if (event.nativeEvent.data.includes('Error')) {
                    console.log(event.nativeEvent.data);
                }
                else {
                    setData(JSON.parse(event.nativeEvent.data));
                }
            }}

        />
    )
}

export default WebScraping