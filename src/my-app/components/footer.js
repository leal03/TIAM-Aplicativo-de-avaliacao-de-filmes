import {View, Text, Image, StyleSheet} from 'react-native'

export default function footer() {
    return(
        <View style={{backgroundColor: 'black', width: '100%', height: 50, display: 'flex', justifyContent: 'space-between',alignItems: 'center', padding: 10, flexDirection: 'row'}}>
            <Image style={{width: 100, height: 100}} source={require('../assets/logo.png')} />
            <Text style={{color: 'white'}}>Todos os direiros reservados @</Text>
        </View>
    )
}