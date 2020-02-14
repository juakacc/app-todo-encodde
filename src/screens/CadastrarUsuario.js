import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import ComumStyles from '../ComumStyles'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Titulo from '../components/Titulo'

import { connect } from 'react-redux'
import { criarUsuario } from '../store/actions/user'

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

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Login')
        }
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
            this.setState({ 
                err_password: 'A senha deve conter no mínimo 6 caracteres',
                password: '',
                confirmPassword: ''
            })
            valid = false
        }
        if (this.state.password != this.state.confirmPassword) {
            this.setState({ 
                err_confirmPassword: 'As senhas devem ser iguais',
                password: '',
                confirmPassword: ''
            })
            valid = false
        }
        return valid
    }

    cadastrar = () => {
        if (this.isValid()) {
            const usuario = {
                nome: this.state.nome,
                username: this.state.username,
                password: this.state.password
            }
            this.props.onRegistrar(usuario)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Titulo titulo='Cadastrar novo usuário' />

                <ScrollView>
                    <View style={styles.scroll}>
                    <Input
                        label='Nome'
                        value={this.state.nome}
                        errorMessage={this.state.err_nome}
                        returnKeyType='next'
                        onChangeText={nome => this.setState({ nome })} />

                    <Input
                        label='Username'
                        value={this.state.username}
                        errorMessage={this.state.err_username}
                        autoCapitalize='none'
                        returnKeyType='next'
                        onChangeText={n => this.setUsername(n)} />

                    <Input
                        label='Senha'
                        value={this.state.password}
                        secureTextEntry={true}
                        errorMessage={this.state.err_password}
                        autoCapitalize='none'
                        returnKeyType='next'
                        onChangeText={password => this.setState({ password })} />

                    <Input
                        label='Confirmação de senha'
                        value={this.state.confirmPassword}
                        errorMessage={this.state.err_confirmPassword}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        returnKeyType='done'
                        onChangeText={confirmPassword => this.setState({ confirmPassword })} />

                    <TouchableOpacity style={styles.btnAdd} onPress={this.cadastrar}>
                        <View>
                            <Text><Icon name='save' size={20} /> Enviar informações</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...ComumStyles.container
    },
    scroll: {
        alignItems: 'center'
    },
    btnAdd: {
        ...ComumStyles.btn
    }
})

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRegistrar: usuario => dispatch(criarUsuario(usuario))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CadastrarUsuario)