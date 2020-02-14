import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import ComumStyles from '../ComumStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

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
                <View style={styles.containerInterno}>
                    <View>
                        <Text style={styles.titulo}>{ this.props.titulo }</Text>
                        <Text style={styles.descricao}>{ this.props.descricao }</Text>
                    </View>

                    <View style={styles.pencil}>
                        <Icon name='edit' size={30} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 5
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 16
    },
    descricao: {
        color: '#363636'
    },
    containerInterno: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pencil: {
        marginRight: 10
    }
})

export default Tarefa