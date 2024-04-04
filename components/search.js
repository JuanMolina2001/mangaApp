import WebScraping from "./webScraping"
export const Search = ({ setSearch }) => {

    return (
        <>
            <TextInput
                style={styles.search}
                placeholder="Search"
                placeholderTextColor="white"
                onChangeText={(text) => setSearch(text)}
            />
            <WebScraping
                uri={`https://visortmo.com/library?_pg=1&page=${page}`}
                js={scripts.getMangas}
                setData={setMangas}
            />
        </>
    )
}