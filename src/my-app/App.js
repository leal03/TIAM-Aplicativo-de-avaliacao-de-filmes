import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cadastro from './pages/cadastro';
import Login from './pages/login';
import PaginaPrincipal from './pages/home';
import MidiaPesquisada from './pages/midiaPesquisada';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
        <Stack.Screen name="MidiaPesquisada" component={MidiaPesquisada} />
      </Stack.Navigator>
    </NavigationContainer>
    //aaaaaa
  );
}
