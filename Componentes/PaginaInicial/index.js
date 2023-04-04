import React from 'react'
import { Text, View, Image } from 'react-native'
import Logo from '../../assets/logo.jpg'
import estilos from './estilos'

export default function PaginaInicial() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.logo} source={Logo} />
      <Text style={estilos.titulo}>
        Você sabe qual é a ordem cronológica da franquia Star Wars?
      </Text>
      <Text style={estilos.paragrafo}>
        Os principais filmes da franquia estão divididos em e trilogias. Clique
        no botão a seguir para conferir.
      </Text>
    </View>
  )
}
