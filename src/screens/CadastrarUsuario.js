import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import ComumStyles from '../ComumStyles'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class CadastrarUsuario extends React.Component {

    state = {
        nome: '',
        username: '',
        password: '',
        confirmPassword: '',

        err_nome: '',
        err_username: '',
        err_password: '',
        err_confirmPassword: ''
    }

    setUsername = name => {
        this.setState({
            username: name.trim().toLowerCase()
        })
    }

    isValid = () => {
        let valid = true
        this.setState({
            err_nome: '',
            err_username: '',
            err_password: '',
            err_confirmPassword: ''
        })

        if (this.state.nome == '') {
            this.setState({ err_nome: 'Digite um nome válido' })
            valid = false
        }
        if (this.state.username == '') {
            this.setState({ err_username: 'Digite um username válido' })
            valid = false
        }
        if (this.state.password.length < 6) {
            this.setState({ err_password: 'A senha deve conter no mínimo 6 caracteres' })
            valid = false
        }
        if (this.state.password != this.state.confirmPassword) {
            this.setState({ err_confirmPassword: 'As senhas devem ser iguais' })
            valid = false
        }
        return valid
    }

    cadastrar = () => {
        if (this.isValid()) {
            Alert.alert('Tudo certo para enviar')
            const user = {
                nome: this.state.nome,
                username: this.state.username,
                password: this.state.password
            }
            // Enviar
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cadastrar novo usuário</Text>

                <Input
                    label='Nome'
                    style={styles.input}
                    value={this.state.nome}
                    errorMessage={this.state.err_nome}
                    returnKeyType='next'
                    onChangeText={nome => this.setState({ nome })} />

                <Input
                    label='Username'
                    style={styles.input}
                    value={this.state.username}
                    errorMessage={this.state.err_username}
                    returnKeyType='next'
                    onChangeText={n => this.setUsername(n)} />

                <Input
                    label='Senha'
                    style={styles.input}
                    value={this.state.password}
                    secureTextEntry={true}
                    errorMessage={this.state.err_password}
                    returnKeyType='next'
                    onChangeText={password => this.setState({ password })} />

                <Input
                    label='Confirmação de senha'
                    style={styles.input}
                    value={this.state.confirmPassword}
                    errorMessage={this.state.err_confirmPassword}
                    secureTextEntry={true}
                    returnKeyType='done'
                    onChangeText={confirmPassword => this.setState({ confirmPassword })} />

                <TouchableOpacity style={styles.btnAdd} onPress={this.cadastrar}>
                    <View>
                        <Text><Icon name='save' /> Enviar informações</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...ComumStyles.container
    }, 
    title: {
        ...ComumStyles.title
    },
    btnAdd: {
        ...ComumStyles.btn
    }
})

export default CadastrarUsuario