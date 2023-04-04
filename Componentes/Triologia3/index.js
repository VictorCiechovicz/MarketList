import React from 'react'
import { Text, View, Image } from 'react-native'
import Sith from '../../assets/sith.jpg'
import estilos from './estilos'

export default function Triologia3() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>A história de Rey</Text>
      <Image style={estilos.img} source={Sith} />

      <Text style={estilos.paragrafo}>
        Trilogia sequela. Episódios VII, VIII e IX
      </Text>
      <Text style={estilos.paragrafo}>
        Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de
        sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo
        e Chewbacca para procurar a única esperança de restaurar a paz da
        galáxia.
      </Text>
    </View>
  )
}
