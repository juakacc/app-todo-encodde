import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import ComumStyles from '../ComumStyles'
import Titulo from '../components/Titulo'

import { login } from '../store/actions/user'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class Login extends React.Component {

    state = {
        username: '',
        password: '',

        err_username: '',
        err_password: ''
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Home')
        }
    }

    isValid = () => {
        let valid = true

        if (this.state.username.trim() == '') {
            this.setState({
                err_username: 'Este campo é obrigatório'
            })
            valid = false
        }
        if (this.state.password.trim() == '') {
            this.setState({
                err_password: 'Este campo é obrigatório'
            })
            valid = false
        }
        return valid
    }

    login = () => {
        if (this.isValid()) {
            this.props.onLogin({ 
                username: this.state.username,
                password: this.state.password 
            })
            this.setState({
                username: '',
                password: '',
                err_username: '',
                err_password: ''
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Titulo titulo='Login' />

                <ScrollView>
                    <View style={styles.scroll}>
                    <Text>Entre para acessar as suas tarefas</Text>

                    <Input
                        label='Username'
                        errorMessage={this.state.err_username}
                        value={this.state.username}
                        returnKeyType='next'
                        onChangeText={username => this.setState({ username })} />

                    <Input
                        label='Senha'
                        errorMessage={this.state.err_password}
                        value={this.state.password}
                        returnKeyType='done'
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={true} />

                    <TouchableOpacity onPress={this.login} style={styles.btnLogin}>
                        <Text><Icon name='plug' size={20} /> Login</Text>
                    </TouchableOpacity>

                    <Text>Ainda não é cadastrado no App?</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CadastrarUsuario')} style={styles.btnCadastrar}>
                        <Text><Icon name='user-plus' size={20} /> Cadastre-se</Text>
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

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: usuario => dispatch(login(usuario))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)