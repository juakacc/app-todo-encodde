import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ComumStyles from '../ComumStyles'

export default LegendaStatus = props => {
    return (
        <View style={styles.container}>
            <Text><Icon name='circle' size={20} color={ComumStyles.color.pendente} /> Pendente</Text>
            <Text><Icon name='circle' size={20} color={ComumStyles.color.fazendo} /> Fazendo</Text>
            <Text><Icon name='circle' size={20} color={ComumStyles.color.concluida} /> Concluída</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})