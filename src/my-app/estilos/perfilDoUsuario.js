import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0f1c2b',
    },
    containerLogo: {
        width: '100%',
        height: 150,
        display: 'flex',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200,
    },
    containerImgPerfil: {
        display: 'flex',
        alignItems: 'center',
    },
    imgPerfil: {
        width: 100,
        height: 100
    },
    containerInfosUsuario: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    },
    TxT: {
        color: 'white',
        fontSize: 15
    },
    main: {
        color: 'white',
        margin: 40,
        display: 'flex',
        gap: 20
    },
    imgPequena: {
        width: 100,
        height: 150
    },
    infos: {
        display: 'flex',
        flexDirection: 'column'
    },
    containerInfos: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    containerBotao: {
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'flex-end'
    },
    botao: {
        backgroundColor: '#002C84',
        width: 150,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
})