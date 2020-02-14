import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class HeaderUsuario extends React.Component {

    render() {
        return (
            <Text style={styles.titulo}>Bem-vindo(a), {this.props.nome}</Text>
        )
    }
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: 'right',
        fontSize: 16,
        marginVertical: 10
    }
})

const mapStateToProps = ({ user }) => {
    return {
        nome: user.nome
    }
}

export default connect(mapStateToProps)(HeaderUsuario)