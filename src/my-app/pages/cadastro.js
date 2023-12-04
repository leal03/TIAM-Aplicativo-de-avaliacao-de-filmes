import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native'; // Adicionei o Alert para mostrar mensagens de erro
import { useNavigation } from '@react-navigation/native';
import { db, createTableUsuarios } from '../bd/banco';  // Substitua pelo caminho correto

import estilos from '../estilos/cadastro'

export default function Cadastro() {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
      email: '',
      usuario: '',
      senha: '',
    });

    // Chame a função de criação de tabela no início do componente
    React.useEffect(() => {
      createTableUsuarios();
    }, []); 

    const handleCadastro = () => {
      console.log('Tentativa de cadastro:', formData);
      const { email, usuario, senha } = formData;

      // Valide os dados do formulário
      if (!email || !usuario || !senha) {
        Alert.alert('Erro!', 'Preencha todos os campos.');
        return;
      }

      // Insira os dados no banco de dados
      db.transaction((tx) => {
        console.log('Iniciando transação...');
        tx.executeSql(
          'INSERT INTO usuarios (email, usuario, senha) VALUES (?, ?, ?)',
          [email, usuario, senha],
          (_, result) => {
            console.log('Usuário cadastrado com sucesso:', result);
            // Navegue para a próxima tela
            navigation.navigate('Login');
          },
          (_, error) => {
            console.error('Erro ao cadastrar usuário:', error);
            Alert.alert('Erro!', 'Erro ao cadastrar usuário.');
          }
        );
      });
    };

    const login = () => {
      navigation.navigate('Login')
    }

    return (
        <View style={estilos.container}>
            <View style={estilos.posicaoImagem}>
                <Image style={estilos.Imagem} source={require('../assets/logo.png')} />
                <View style={estilos.inputs}>
                    <TextInput style={estilos.inputEmail}
                    placeholder='E-mail'
                    onChangeText={(text) => setFormData({ ...formData, email: text })}
                    />
                    <TextInput style={estilos.inputUsuario}
                    placeholder='Usuario'
                    onChangeText={(text) => setFormData({ ...formData, usuario: text })}
                    />
                    <TextInput style={estilos.inputSenha}
                    placeholder='Senha'
                    onChangeText={(text) => setFormData({ ...formData, senha: text })}
                    />
                </View>
                <TouchableOpacity onPress={handleCadastro} style={estilos.botaoCriarConta}>
                    <Text>Criar Conta</Text>
                </TouchableOpacity>
                <Text style={estilos.TxT1}>Já tem uma conta? </Text>
                <TouchableOpacity onPress={login}>
                  <Text style={estilos.TxT2}>Fazer Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
