import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  checkedContainer: {
    opacity: 0.5
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
  produto: {
    fontSize: 15,
    color: '#000'
  },
  quantidade: {
    fontSize: 12,
    color: '#000',
    textAlign: 'justify'
  },
  containerList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    height: 50,
    marginTop: 10
  },
  containerDesc: {
    flex: 1
  },
  containerEmpty: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
 

  },
  modalText: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 50,
    marginTop: 10
  }
})
export default estilos
