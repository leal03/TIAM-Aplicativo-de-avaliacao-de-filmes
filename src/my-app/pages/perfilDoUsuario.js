import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { db } from '../bd/banco'; 

import estilos from '../estilos/perfilDoUsuario'
import Footer from '../components/footer'

export default function PerfilDoUsuario({ route }) {
    const navigation = useNavigation();
    const { userId }  = route.params;

    const [userData, setUserData] = useState({
        nome: '',
        email: '',
        senha: '',
      });

      useEffect(() => {
        // Função para buscar informações do usuário no banco de dados
        const fetchUserData = () => {
          db.transaction((tx) => {
            tx.executeSql(
              'SELECT usuario, email, senha FROM usuarios WHERE id = ?',
              [userId],
              (_, result) => {
                if (result.rows.length > 0) {
                  const { usuario, email, senha } = result.rows.item(0);
                  setUserData({ usuario, email, senha });
                } else {
                  Alert.alert('Erro!', 'Usuário não encontrado.');
                }
              },
              (_, error) => {
                console.error('Erro na consulta ao banco de dados:', error);
                Alert.alert('Erro!', 'Erro ao obter informações do usuário.');
              }
            );
          });
        };
    
        // Chamando a função ao montar o componente
        fetchUserData();
      }, [userId]);

    const loggout = () => {
        navigation.navigate('Login')
    }

    const paginaPrincipal = () => {
        navigation.navigate('PaginaPrincipal')
    }
    return(
        <ScrollView>
            <View style={estilos.container}>
                <View style={estilos.containerLogo}>
                    <TouchableOpacity onPress={paginaPrincipal}>
                        <Image style={estilos.img} source={require('../assets/logo.png')} />
                    </TouchableOpacity>
                </View>
                <View style={estilos.containerImgPerfil}>
                    <Image style={estilos.imgPerfil} source={require('../assets/imagePerfil.png')} />
                </View>
                <View style={estilos.containerInfosUsuario}>
                    <Text style={estilos.TxT}>{userData.usuario}</Text>
                    <Text style={estilos.TxT}>{userData.email}</Text>
                    <Text style={estilos.TxT}>{userData.senha}</Text>
                </View>
                <View style={estilos.main}>
                    <Text style={estilos.TxT}>Avaliados</Text>
                    <ScrollView horizontal={true}>
                        <View style={estilos.containerInfos}>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <Text style={estilos.TxT}>Assistir Futuramente</Text>
                    <ScrollView horizontal={true}>
                        <View style={estilos.containerInfos}>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                            <View style={estilos.infos}>
                                <Image style={estilos.imgPequena} source={require('../assets/terra.jpg')} />
                                <Text style={estilos.TxT}>Nome</Text>
                            </View>
                        </View>
                    </ScrollView>
                <View style={estilos.containerBotao}>
                    <TouchableOpacity onPress={loggout} style={estilos.botao}>
                        <Text style={estilos.TxT}>Sair da Conta</Text>
                    </TouchableOpacity>
                </View>
                </View>
            <Footer />
            </View>
        </ScrollView>
    )
}