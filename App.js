import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import PaginaInicial from './Componentes/PaginaInicial'
import Listar from './Componentes/Listar'
import Cadastro from './Componentes/Cadastro'

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#7B68EE',
            height: 65
          },
          tabBarLabelStyle: {
            marginBottom: 5,
            fontSize: 12,
            textTransform: 'uppercase',
   
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#A9A9A9'
        }}
      >
        <Tabs.Screen
          name="Inicio"
          component={PaginaInicial}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={24} color={color} />
            )
          }}
        />

        <Tabs.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="tags" size={24} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="Listar"
          component={Listar}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="bars" size={24} color={color} />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
