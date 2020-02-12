import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Titulo from '../components/Titulo'
import ComumStyles from '../ComumStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

class Logout extends React.Component {

    sair = () => {
        Alert.alert('Saindo...')
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <View style={styles.container}>
                <Titulo titulo='Deseja realmente sair do app?' />

                <TouchableOpacity style={styles.btn} onPress={this.sair}>
                    <Text><Icon name='power-off' /> Sim</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...ComumStyles.container
    },
    btn: {
        ...ComumStyles.btn,
        backgroundColor: ComumStyles.color.secundaria
    }
})

export default Logout