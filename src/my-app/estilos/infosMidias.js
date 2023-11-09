import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0f1c2b',
    },
    logo: {
        width: '100%',
        height: 100
    },
    main: {
        display: 'flex',
        marginLeft: 30,
        width: '85%'
    },
    containerTxTCategoria: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    TxTCategoria: {
        color: 'white',
        fontSize: 12
    },
    ImagemMidia: {
        marginTop: 5,
        width: '100%',
        height: 300
    },
    TxTNome: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        color: 'white'
    },
    sinopse: {
        marginTop: 5,
        color: 'white',
        fontSize: 14,
        
    },
    nota: {
        color: 'white',
        marginTop: 15,
        fontSize: 14,
    },
    TxTNota: {
        color: 'white',
        marginTop: 20
    },
    input: {
        backgroundColor: '#2F3C4D',
        height: 50
    },
    containerBotao: {
        marginTop: 10,
        display: 'flex',    
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    botao: {
        backgroundColor: 'blue',
        width: 130,
        height: 30,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }

})