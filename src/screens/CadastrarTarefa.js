import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import ComumStyles from '../ComumStyles'
import { CheckBox, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Titulo from '../components/Titulo'

import { connect } from 'react-redux'
import { salvar_tarefa } from '../store/actions/tarefa'

class CadastrarTarefa extends React.Component {

    state = {
        titulo: '',
        descricao: '',
        status: 'pendente',

        err_titulo: '',
        err_descricao: ''
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Listar')
        }
    }

    isValid = () => {
        let valid = true
        this.setState({
            err_titulo: '',
            err_descricao: ''
        })

        if (this.state.titulo.trim() == '') {
            this.setState({ err_titulo: 'Digite um título válido' })
            valid = false
        }
        if (this.state.descricao.trim() == '') {
            this.setState({ err_descricao: 'Digite uma descrição válida' })
            valid = false
        }
        return valid
    }

    cadastrar = () => {
        if (this.isValid()) {
            const tarefa = {
                titulo: this.state.titulo,
                descricao: this.state.descricao,
                status: this.state.status
            }
            this.props.onSalvar(tarefa)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Titulo titulo='Cadastrar nova tarefa' />

                <ScrollView>
                    <View style={styles.scroll}>
                    <Input
                        label='Título'
                        style={styles.input}
                        value={this.state.titulo}
                        errorMessage={this.state.err_titulo}
                        returnKeyType='next'
                        onChangeText={titulo => this.setState({ titulo })} />

                    <Input
                        label='Descrição'
                        style={styles.input}
                        value={this.state.descricao}
                        errorMessage={this.state.err_descricao}
                        multiline={true}
                        numberOfLines={2}
                        onChangeText={descricao => this.setState({ descricao })} />

                    <Text style={styles.statusTxt}>Status da tarefa</Text>

                    <CheckBox 
                        iconRight
                        title='Pendente'
                        checkedColor={ComumStyles.color.pendente}
                        checked={this.state.status === 'pendente'}
                        onPress={() => this.setState({ status: 'pendente' })} />

                    <CheckBox 
                        iconRight
                        title='Fazendo'
                        checkedColor={ComumStyles.color.fazendo}
                        checked={this.state.status === 'fazendo'}
                        onPress={() => this.setState({ status: 'fazendo' })} />

                    <CheckBox 
                        iconRight
                        title='Concluída'
                        checkedColor={ComumStyles.color.concluida}
                        checked={this.state.status === 'concluida'}
                        onPress={() => this.setState({ status: 'concluida' })} />

                    <TouchableOpacity style={styles.btnAdd} onPress={this.cadastrar}>
                        <View>
                            <Text><Icon name='save' size={20} /> Salvar Tarefa</Text>
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
        ...ComumStyles.container,
    },
    scroll: {
        alignItems: 'center'
    },
    input: {
        ...ComumStyles.input,
        width: 300
    }, 
    statusTxt: {
        alignSelf: 'baseline',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'gray',
        marginLeft: 10
    }, 
    btnAdd: {
        ...ComumStyles.btn
    }
})

const mapStateToProps = ({ tarefa }) => {
    return {
        isLoading: tarefa.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSalvar: tarefa => dispatch(salvar_tarefa(tarefa))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CadastrarTarefa)