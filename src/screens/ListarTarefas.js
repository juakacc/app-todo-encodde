import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ActionButton from 'react-native-action-button'
import ComumStyles from '../ComumStyles'
import Tarefa from '../components/Tarefa'
import Icon from 'react-native-vector-icons/FontAwesome'

class ListarTarefas extends React.Component {

    state = {
        tarefas: [
            {
                id: 1,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'pendente'
            }, {
                id: 2,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'concluida'
            }, {
                id: 3,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'fazendo'
            }, {
                id: 4,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'concluida'
            }, {
                id: 5,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'pendente'
            }, {
                id: 6,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'fazendo'
            }, {
                id: 7,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'pendente'
            }, {
                id: 8,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'pendente'
            }, {
                id: 9,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'pendente'
            }, {
                id: 10,
                titulo: 'Limpar a casa',
                descricao: 'Varrer toda a casa incluindo os quartos e os banheiros',
                status: 'pendente'
            },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Listagem de Atividades</Text>

                <ScrollView>
                    {this.state.tarefas.map(item =>
                        <Tarefa {...item} key={item.id} />
                    )}
                </ScrollView>
                
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
    title: {
        ...ComumStyles.title
    }
})

export default ListarTarefas