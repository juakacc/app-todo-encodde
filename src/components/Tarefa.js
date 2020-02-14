import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import ComumStyles from '../ComumStyles'

class Tarefa extends React.Component {

    getColor = status => {
        switch (status) {
            case 'pendente':
                return ComumStyles.color.pendente
            case 'fazendo':
                return ComumStyles.color.fazendo
            case 'concluida':
                return ComumStyles.color.concluida
        }
    }

    clickTarefa = id => {
       this.props.navigation.navigate('AdicionarTarefa', {
           idTarefa: id
        })
    }

    render() {
        const colorStatus = this.getColor(this.props.status)

        return (
            <TouchableOpacity style={[styles.container, { backgroundColor: colorStatus }]} onPress={() => this.clickTarefa(this.props.id)}>
                <Text style={styles.titulo}>{ this.props.titulo }</Text>
                <Text style={styles.descricao}>{ this.props.descricao }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        padding: 10,
        borderRadius: 10,
        marginBottom: 5
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 16
    },
    descricao: {
        color: 'gray'
    }

})

export default Tarefa