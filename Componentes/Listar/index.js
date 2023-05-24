import React, { useState, useCallback, useEffect } from 'react'
import {
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  SafeAreaView
} from 'react-native'
import { Checkbox } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import estilos from './estilos'

export default function Listar() {
  const [produtos, setProdutos] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)
  const [productValue, setProductValue] = useState('')
  const [productQuantity, setProductQuantity] = useState('')
  const [productName, setProductName] = useState('')
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalValue, setTotalValue] = useState(0)

  useFocusEffect(
    useCallback(() => {
      const fetchProdutos = async () => {
        try {
          const storedProdutos = await AsyncStorage.getItem('@produtos')
          let productList = JSON.parse(storedProdutos)
          if (productList !== null) {
            productList = productList.map(product => ({
              ...product,
              checked: false
            }))
            setProdutos(productList)
          }
        } catch (error) {
          console.log('Error retrieving data', error)
        }
      }
      fetchProdutos()
    }, [])
  )

  useEffect(() => {
    let calculatedQuantity = 0
    let calculatedValue = 0

    produtos.forEach(product => {
      calculatedQuantity += parseInt(product.quantidade)
      calculatedValue += parseFloat(product.valor)
    })

    setTotalQuantity(calculatedQuantity)
    setTotalValue(calculatedValue)
  }, [produtos])

  const handleEdit = index => {
    setCurrentProduct(index)
    setProductName(produtos[index].produto)
    setProductQuantity(produtos[index].quantidade)
    setProductValue(produtos[index].valor)
    setModalVisible(true)
  }

  const handleSubmit = async () => {
    try {
      const newProdutos = [...produtos]
      newProdutos[currentProduct].produto = productName
      newProdutos[currentProduct].quantidade = productQuantity
      newProdutos[currentProduct].valor = productValue
      await AsyncStorage.setItem('@produtos', JSON.stringify(newProdutos))
      setProdutos(newProdutos)
      setModalVisible(false)
      Alert.alert('Produto atualizado com sucesso!')
    } catch (error) {
      console.log('Error updating product', error)
      Alert.alert('Erro ao atualizar o produto.')
    }
  }
  const handleDelete = async index => {
    try {
      const newProdutos = [...produtos]
      newProdutos.splice(index, 1)
      await AsyncStorage.setItem('@produtos', JSON.stringify(newProdutos))
      setProdutos(newProdutos)
      Alert.alert('Produto excluído com sucesso!')
    } catch (error) {
      console.log('Error deleting product', error)
      Alert.alert('Erro ao excluir o produto.')
    }
  }
  const handleCheck = index => {
    const newProdutos = [...produtos]
    newProdutos[index].checked = !newProdutos[index].checked
    setProdutos(newProdutos)
  }
//s;lmflnvwjrn 
  
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Lista de Produtos</Text>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <SafeAreaView style={estilos.modalView}>
          <Text style={estilos.modalText}>Editar Produto</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Nome:</Text>
            <TextInput
              style={estilos.input}
              onChangeText={text => setProductName(text)}
              value={productName}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Quantidade:</Text>
            <TextInput
              style={estilos.input}
              onChangeText={text => setProductQuantity(text)}
              value={productQuantity}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Valor: </Text>
            <TextInput
              style={estilos.input}
              onChangeText={text => setProductValue(text)}
              value={productValue}
            />
          </View>

          <Button title="Salvar" onPress={handleSubmit} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </SafeAreaView>
      </Modal>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View
            style={[
              estilos.containerList,
              item.checked ? estilos.checkedContainer : null
            ]}
          >
            <Checkbox
              status={item.checked ? 'checked' : 'unchecked'}
              onPress={() => handleCheck(index)}
            />
            <View style={estilos.containerDesc}>
              <Text style={estilos.produto}>
                Produto:<Text> {item.produto}</Text>{' '}
              </Text>
              <Text style={estilos.quantidade}>
                Qnt: {item.quantidade} Unid
              </Text>
            </View>

            <Text style={estilos.paragrafo}>R$: {item.valor} </Text>

            <TouchableOpacity onPress={() => handleEdit(index)}>
              <Feather name="edit" size={24} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(index)}>
              <Feather name="trash-2" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={estilos.containerEmpty}>
            <Text>Nao possui nenhum produto cadastrado na lista ...</Text>
          </View>
        }
      />
      <View>
        <Text>Quantidade de Itens: {totalQuantity}</Text>
        <Text>Valor total dos Itens: R$ {totalValue.toFixed(2)}</Text>
      </View>
    </View>
  )
}
