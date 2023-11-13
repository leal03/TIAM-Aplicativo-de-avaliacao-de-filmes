import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import estilos from '../estilos/infosMidias';
import Footer from '../components/footer';

export default function InfosMidia({ route }) {
  const { categoria, imagem, nome, sinopse, nota } = route.params;

  const navigation = useNavigation();
  const [notaUsuario, setNotaUsuario] = useState('');

  const handleHome = () => {
    navigation.navigate('PaginaPrincipal');
  }

  const handleEnviarNota = () => {
    // Adicione lógica para enviar a nota do usuário
    console.log('Nota enviada:', notaUsuario);
  }

  return (
    <ScrollView>
      <View style={estilos.container}>
        <TouchableOpacity onPress={handleHome}>
          <Image style={estilos.logo} source={require('../assets/logo.png')} />
        </TouchableOpacity>
        <View style={estilos.main}>
          <View style={estilos.containerTxTCategoria}>
            <Text style={estilos.TxTCategoria}>{categoria}</Text>
          </View>
          <Image style={estilos.ImagemMidia} source={{ uri: imagem }} />
          <Text style={estilos.TxTNome}>{nome}</Text>
          <Text style={estilos.sinopse}>{sinopse}</Text>
          <Text style={estilos.nota}>Nota: {nota}</Text>
          <View style={estilos.containerNota}>
            <TextInput
              style={estilos.input}
              placeholder="Deixe aqui sua nota"
              keyboardType="numeric"
              onChangeText={(text) => setNotaUsuario(text)}
            />
            <TouchableOpacity style={estilos.containerBotao} onPress={handleEnviarNota}>
              <Text style={estilos.botao}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
