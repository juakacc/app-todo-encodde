import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import ComumStyles from '../ComumStyles'
import { CheckBox, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Titulo from '../components/Titulo'

class CadastrarTarefa extends React.Component {

    state = {
        titulo: '',
        descricao: '',
        status: 'pendente',

        err_titulo: '',
        err_descricao: ''
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
            Alert.alert('Tudo pronto para salvar')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Titulo titulo='Cadastrar nova tarefa' />

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
                        <Text><Icon name='save' /> Salvar Tarefa</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...ComumStyles.container,
        // alignItems: 'baseline'
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

export default CadastrarTarefa