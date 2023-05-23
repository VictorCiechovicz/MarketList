import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import estilos from './estilos'

export default function Cadastro() {
  const [produto, setProduto] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [valor, setValor] = useState('')

  const handleOnPress = async () => {
    if (!produto.trim()) {
      Alert.alert('Por favor, insira o nome do produto.')
      return
    }

    if (!quantidade.trim()) {
      Alert.alert('Por favor, insira a quantidade do produto.')
      return
    }
    try {
      const existingProducts = await AsyncStorage.getItem('@produtos')
      let produtos = JSON.parse(existingProducts)
      if (!produtos) {
        produtos = []
      }

      produtos.push({ produto: produto, quantidade: quantidade,valor:valor })

      await AsyncStorage.setItem('@produtos', JSON.stringify(produtos))
      Alert.alert('Produto cadastrado com sucesso!')
      setProduto('')
      setQuantidade('')
      setValor('')
    } catch (error) {
      Alert.alert('Houve um erro ao cadastrar o produto.')
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Cadastro</Text>

      <Text style={estilos.label}>Produto</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setProduto}
        value={produto}
      />

      <Text style={estilos.label}>Quantidade</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setQuantidade}
        value={quantidade}
        keyboardType="numeric"
      />
       <Text style={estilos.label}>Valor</Text>
       <TextInput
        style={estilos.input}
        onChangeText={setValor}
        value={valor}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={handleOnPress} style={estilos.button}>
        <Text style={estilos.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}
