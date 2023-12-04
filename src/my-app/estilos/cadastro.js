import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0f1c2b',
    },
    posicaoImagem: {
        padding: 0,
        margin: 0,
        width: '100%',
        height: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Imagem: {
        width: 250,
        height: 250
    },
    inputs: {
        display: 'flex',
        gap: 30,
        width: '70%',
        height: 250,
    },
    inputEmail: {
        color: 'white',
        backgroundColor: '#353535',
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
    },
    inputUsuario: {
        color: 'white',
        backgroundColor: '#353535',
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
    },
    inputSenha: {
        color: 'white',
        backgroundColor: '#353535',
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
    },
    botaoCriarConta: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: 60,
        borderRadius: 50,
        backgroundColor: '#002c84'
    },
    TxT1: {
        color: 'white'
    },
    TxT2: {
        color: '#d0d1f2'
    }
})