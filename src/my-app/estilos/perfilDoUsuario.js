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

})