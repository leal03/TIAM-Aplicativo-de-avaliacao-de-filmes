import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import estilos from '../estilos/infosMidias'

export default function InfosMidia() {
    return(
        <ScrollView>
            <View style={estilos.container}>
                <Image style={estilos.logo} source={require('../assets/logo.png')} />
                <View style={estilos.main}>
                    <View style={estilos.containerTxTCategoria}>
                        <Text style={estilos.TxTCategoria}>Categoria</Text>
                        <Text style={estilos.TxTCategoria}>Categoria</Text>
                        <Text style={estilos.TxTCategoria}>Categoria</Text>
                    </View>
                    <Image style={estilos.ImagemMidia} source={require('../assets/terra.jpg')} />
                    <Text style={estilos.TxTNome}>Nome</Text>
                    <Text style={estilos.sinopse}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                    <Text style={estilos.nota}>Nota: </Text>
                    <Text style={estilos.TxTNota}>Deixe aqui sua nota</Text>
                    <TextInput style={estilos.input}></TextInput>
                    <View style={estilos.containerBotao}>
                        <TouchableOpacity style={estilos.botao}>Enviar</TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    )
}