import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../Services/firebaseConfig"
import estilos from '../estilos/login'

const Login = ({setUser}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message; 
                console.log(errorMessage)
            })
    }
    return(
        <View style={estilos.container}>
            <View style={estilos.posicaoImagem}>
                <Image style={estilos.Imagem} source={require('../assets/logo.png')} />
                <View style={estilos.inputs}>
                    <TextInput style={estilos.inputEmail}
                    placeholder='E-mail'
                    value={email}
                    onChangeText={(val) => {
                        setEmail(val)
                    }}
                    />
                    <TextInput style={estilos.inputSenha}
                    placeholder='Senha'
                    value={password}
                    onChangeText={(val) => {
                        setPassword(val)
                    }}
                    />
                </View>
                <TouchableOpacity style={estilos.botaoCriarConta} onPress={handleLogin}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}