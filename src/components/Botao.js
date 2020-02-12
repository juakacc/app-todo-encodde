import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native'

class Botao extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.btn}>
                <Text style={styles.btnText}>{this.props.label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#1abecbff'
    },
    btnText: {
        color: 'white'
        // color: '#f58220ff'
    }
})

export default Botao