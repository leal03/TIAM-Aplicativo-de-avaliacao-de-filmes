import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import estilos from '../estilos/login'
export default function cadastro() {

    const navigation = useNavigation();

    return(
        <View style={estilos.container}>
            <View style={estilos.posicaoImagem}>
                <Image style={estilos.Imagem} source={require('../assets/logo.png')} />
                <View style={estilos.inputs}>
                    <TextInput style={estilos.inputEmail}
                    placeholder='E-mail'
                    />
                    <TextInput style={estilos.inputSenha}
                    placeholder='Senha'
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('PaginaPrincipal')}  style={estilos.botaoCriarConta}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}