import React from 'react'
import { Text, View} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import estilos from './estilos'

export default function PaginaInicial() {
  return (
    <View style={estilos.container}>
      <AntDesign name="shoppingcart" size={150} color="#7B68EE" />
      <Text style={estilos.titulo}>Supermarket List</Text>
      <Text style={estilos.paragrafo}></Text>
    </View>
  )
}
