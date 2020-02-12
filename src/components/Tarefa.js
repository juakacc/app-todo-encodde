import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
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

    render() {

        const colorStatus = this.getColor(this.props.status)

        return (
            <View style={[styles.container, { backgroundColor: colorStatus }]}>
                <Text style={styles.titulo}>{this.props.titulo}</Text>
                <Text style={styles.descricao}>{this.props.descricao}</Text>
                {/* <Text style={styles.status}>{this.props.status}</Text> */}
            </View>
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