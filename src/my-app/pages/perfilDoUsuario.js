import { View, Text, Image, ScrollView } from "react-native";

import estilos from '../estilos/perfilDoUsuario'

export default function perfilDoUsuario() {
    return(
            <View style={estilos.container}>
                <View style={estilos.containerLogo}>
                    <Image style={estilos.img} source={require('../assets/logo.png')} />
                </View>
                <View style={estilos.containerImgPerfil}>
                    <Image style={estilos.imgPerfil} source={require('../assets/imagePerfil.png')} />
                </View>
                <View style={estilos.containerInfosUsuario}>
                    <Text style={estilos.TxT}>Nome</Text>
                    <Text style={estilos.TxT}>E-mail</Text>
                    <Text style={estilos.TxT}>Senha</Text>
                </View>
                <Text style={estilos.TxT2}>Avaliados</Text>
                
            </View>
    )
}