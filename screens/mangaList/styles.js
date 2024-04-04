import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  search: {
    marginBottom: 10,
    height: 50,
    width: '80%',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 20,
  },
});
export default styles;