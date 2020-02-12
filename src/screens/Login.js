import React from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import ComumStyles from '../ComumStyles'
import Titulo from '../components/Titulo'

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={styles.container}>
                <Titulo titulo='Login' />
                <Text>Entre para acessar as suas tarefas</Text>

                <TextInput 
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                    placeholder='Username' />

                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Senha' 
                    secureTextEntry={true}
                    autoCompleteType='password' />

                <TouchableOpacity onPress={this.login} style={styles.btnLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <Text>Ainda não é cadastrado no App?</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('CadastrarUsuario')} style={styles.btnCadastrar}>
                    <Text>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...ComumStyles.container
    },
    input: {
        backgroundColor: '#ccc',
        width: 200,
        padding: 10,
        margin: 10,
        borderRadius: 15
    },
    btnLogin: {
        padding: 10,
        margin: 10,
        width: 200,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: ComumStyles.color.principal
    },
    btnCadastrar: {
        padding: 10,
        margin: 10,
        width: 200,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: ComumStyles.color.secundaria
    }
})

export default Login