import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PaginaInicial from './Componentes/PaginaInicial'
import Triologia1 from './Componentes/Triologia1'
import Triologia2 from './Componentes/Triologia2'
import Triologia3 from './Componentes/Triologia3'

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Inicio" component={PaginaInicial} />
        <Tabs.Screen name="Triologia 1" component={Triologia1} />
        <Tabs.Screen name="Triologia 2" component={Triologia2} />
        <Tabs.Screen name="Triologia 3" component={Triologia3} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
