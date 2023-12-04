import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../bd/banco';  // Substitua pelo caminho correto

import estilos from '../estilos/login';

export default function Login() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const handleLogin = () => {
    const { email, senha } = formData;
    console.log('Tentativa de login - email:', email);
    console.log('Senha: ', senha);
    
    // Valide os dados do formulário
    if (!email || !senha) {
      Alert.alert('Erro!', 'Preencha todos os campos.');
      return;
    }

    // Realize a autenticação no banco de dados
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT id FROM usuarios WHERE email = ? AND senha = ?',
        [email, senha],
        (_, result) => {
          if (result.rows.length > 0) {
            const userId = result.rows.item(0).id;
            console.log('Usuário autenticado com sucesso. ID:', userId);
            navigation.navigate('PaginaPrincipal', { userId });
          } else {
            console.error('Credenciais inválidas.');
            Alert.alert('Erro!', 'Credenciais inválidas.');
          }
        },
        (_, error) => {
          console.error('Erro na consulta ao banco de dados:', error);
          Alert.alert('Erro!', 'Erro na autenticação.');
        }
      );
    });
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro')
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.posicaoImagem}>
        <Image style={estilos.Imagem} source={require('../assets/logo.png')} />
        <View style={estilos.inputs}>
          <TextInput
            style={estilos.inputEmail}
            placeholder='E-mail'
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
          <TextInput
            style={estilos.inputSenha}
            placeholder='Senha'
            secureTextEntry
            onChangeText={(text) => setFormData({ ...formData, senha: text })}
          />
        </View>
        <TouchableOpacity onPress={handleLogin} style={estilos.botaoCriarConta}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <Text style={estilos.TxT1}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={handleCadastro}>
          <Text style={estilos.TxT2}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
