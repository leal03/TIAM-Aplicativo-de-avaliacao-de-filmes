import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0f1c2b',
    },
    topo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200
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
    main: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10
    },
    infos: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },
    imgMidias: {
        width: 150,
        height: 250
    },
    texto: {
        color: 'white',
        padding: 20
    },
    areaInfosMidia: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    botao: {
        backgroundColor: '#002C84',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        width: 150,
        height: 40,
        borderRadius: 40,
        color: 'white'
    },
    textoInfo: {
        color: 'white'
    }
})