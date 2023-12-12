import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0f1c2b',
    },

    areaPesquisa: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#083B54',
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    lupa: {
        width: 25,
        height: 25
    },

    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: 110,
    },

    logo: {
        width: 150,
        height: 150
    },

    barraPesquisa: {
        width: 130,
        height: 30,
        backgroundColor: '#2F3C4D',
        fontSize: 11,
        borderRadius: 30,
        color: 'white'
    },

    iconPerfil: {
        width: 50,
        height: 50
    },

    imagemGrande: {
        display: 'flex',
        alignItems: 'center',
        height: 300,
    },

    imgGrande: {
        width: '90%',
        height: '100%',
    },

    midiasAvaliados: {
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    
    txtmidias: {
        color: 'white',
        padding: 0,
        margin: 20,
    },
    
    containerPequeno: {
        display: 'flex',
        gap: 20,
        flexDirection: 'row',
        margin: 5
    },

    txtNomeDoFilme: {
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        fontSize: 9
    },

    imgPequena: {
        width: 100,
        height: 150,
    },
})