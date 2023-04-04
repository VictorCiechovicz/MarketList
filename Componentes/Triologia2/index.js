import React from 'react'
import { Text, View, Image } from 'react-native'
import Lucas from '../../assets/lucas-skywalker.jpg'
import estilos from './estilos'

export default function Triologia2() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>A história de Luke Skywalker</Text>
      <Image style={estilos.img} source={Lucas} />

      <Text style={estilos.paragrafo}>
        Trilogia original. Episódios IV, V e VI
      </Text>
      <Text style={estilos.paragrafo}>
        Essa foi primeira trilogia a surgir porém sua história se passa após a
        trilogia prequela.
      </Text>
      <Text style={estilos.paragrafo}>
        Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de
        socorro da princesa Leia e se batalha com o grande vilão Darth Vader.
      </Text>
    </View>
  )
}
