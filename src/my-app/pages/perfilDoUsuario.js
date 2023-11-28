import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import estilos from '../estilos/perfilDoUsuario'
import Footer from '../components/footer'

export default function perfilDoUsuario() {
    return(
        <ScrollView>
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
                    <TouchableOpacity style={estilos.botao}>
                        <Text style={estilos.TxT}>Sair da Conta</Text>
                    </TouchableOpacity>
                </View>
                </View>
            <Footer />
            </View>
        </ScrollView>
    )
}