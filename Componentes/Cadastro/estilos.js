import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 250,
    height: 250,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 15,
    marginTop: 100
  },
  paragrafo: {
    fontSize: 15,
    color: '#000',
    margin: 20,
    textAlign: 'justify'
  },
  label: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    textTransform:'capitalize'
  },
  button: {
    backgroundColor: '#7B68EE',
    justifyContent:'center',
    borderRadius: 10,
    marginTop: 40,
    width: 300,
    height: 50
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
})
export default estilos
