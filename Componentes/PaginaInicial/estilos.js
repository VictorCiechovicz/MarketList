import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 300,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 23,
    color: '#F7EC09',
    fontWeight: 'bold',
    textAlign: 'center',

    margin: 10
  },
  paragrafo: {
    fontSize: 15,
    color: '#F7EC09',
    textAlign: 'justify',
    margin: 20
  }
})
export default estilos
