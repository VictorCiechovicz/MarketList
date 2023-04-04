import React from 'react'
import { Text, View, Image } from 'react-native'
import DarthVader from '../../assets/darth-vader.jpeg'
import estilos from './estilos'

export default function Triologia1() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>A história do Darth Vader</Text>
      <Image style={estilos.img} source={DarthVader} />

      <Text style={estilos.paragrafo}>
        Trilogia prequela. Episódios I, II e III
      </Text>
      <Text style={estilos.paragrafo}>
        Apesar de ter sido criada depois da trilogia original, essa é a primeira
        trilogia na ordem crinológica da série Star Wars. Nela é contada a
        história do grande vilão Darth Vader.
      </Text>
      <Text style={estilos.paragrafo}>
        Através dessa trilogia você vai saber de onde ele veio e quem ele é.
      </Text>
    </View>
  )
}
