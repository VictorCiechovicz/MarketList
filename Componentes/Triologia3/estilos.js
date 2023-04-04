import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#000'
  },
  img: {
    width: 250,
    height: 250,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 28,
    color: '#F7EC09',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  paragrafo: {
    fontSize: 15,
    color: '#F7EC09',

    margin: 15,
    textAlign: 'justify'
  }
})
export default estilos
