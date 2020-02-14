import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Titulo from '../components/Titulo'
import ComumStyles from '../ComumStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux'
import { userLogout } from '../store/actions/user'
import AsyncStorage from '@react-native-community/async-storage'
import HeaderUsuario from '../components/HeaderUsuario'

class Logout extends React.Component {

    sair = async () => {
        await AsyncStorage.setItem('userData', JSON.stringify({}))
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderUsuario />
                <View style={styles.viewCenter}>
                    <Titulo titulo='Deseja realmente sair do app?' />

                    <TouchableOpacity style={styles.btn} onPress={this.sair}>
                        <Text><Icon name='power-off' size={20} /> Sim</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...ComumStyles.container
    },
    viewCenter: {
        alignItems: 'center'
    },
    btn: {
        ...ComumStyles.btn,
        backgroundColor: ComumStyles.color.secundaria
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(userLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)