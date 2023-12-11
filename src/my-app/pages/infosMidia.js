import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { db } from '../bd/banco';


import estilos from '../estilos/infosMidias';
import Footer from '../components/footer';

export default function InfosMidia({ route }) {
  const { categoria, imagem, nome, sinopse, nota, userId } = route.params;
  const navigation = useNavigation();
  const [notaUsuario, setNotaUsuario] = useState('');

  const handleHome = () => {
    navigation.navigate('PaginaPrincipal', { userId });
  }

  const handleEnviarNota = async () => {

    if (!userId) {
      console.error('ID do usuário não disponível.');
      return;
    }


    const imagemBase64 = await imagemParaBase64(imagem);


    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO avaliados (nome, imagem, usuario_id) VALUES (?, ?, ?)',
        [nome, imagemBase64, userId],
        (_, result) => {
          console.log('Dados adicionados com sucesso!');

        },
        (error) => {
          console.error('Erro ao adicionar dados: ', error);
        }
      );
    });


    if(!notaUsuario) {
      Alert.alert('Favor!', 'Adicione uma nota de 0 a 10.');
    }
    console.log('Nota enviada:', notaUsuario);
  }

  // Função para converter a imagem para base64
  const imagemParaBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

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
