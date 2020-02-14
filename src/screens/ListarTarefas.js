import React from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import ActionButton from 'react-native-action-button'
import ComumStyles from '../ComumStyles'
import Tarefa from '../components/Tarefa'
import Icon from 'react-native-vector-icons/FontAwesome'
import Titulo from '../components/Titulo'

import { connect } from 'react-redux'
import { load_tarefas } from '../store/actions/tarefa'
import LegendaStatus from '../components/LegendaStatus'
import HeaderUsuario from '../components/HeaderUsuario'

class ListarTarefas extends React.Component {

    componentDidMount = () => {
        this.props.onLoadingTarefas()
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderUsuario />
                <Titulo titulo='Listagem de Atividades' />

                {this.props.tarefas.length > 0 ? (
                    <ScrollView>
                        {this.props.tarefas.map(item =>
                            <Tarefa {...item} navigation={this.props.navigation} key={item.id} />
                        )}
                    </ScrollView>
                ) : 
                (<View>
                    <Text style={styles.semTarefas}>Nenhuma Tarefa cadastrada</Text>
                    <Icon name='child' size={50} style={styles.icon} />
                </View>) }

                <LegendaStatus />
                
                <ActionButton 
                    buttonColor={ComumStyles.color.principal} 
                    onPress={() => this.props.navigation.navigate('AdicionarTarefa')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...ComumStyles.container
    },
    semTarefas: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10
    }, 
    icon: {
        alignSelf: 'center'
    }
})

const mapStateToProps = ({ tarefa }) => {
    return {
        tarefas: tarefa.tarefas
    }
}

const mapDispacthToProps = dispatch => {
    return {
        onLoadingTarefas: () => dispatch(load_tarefas())
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(ListarTarefas)