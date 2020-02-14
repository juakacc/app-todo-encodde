import React from 'react'
import Navigator from './Navigator'
import { connect } from 'react-redux'

import { set_mensagem } from './store/actions/mensagem'
import { ToastAndroid } from 'react-native'

class App extends React.Component {

    componentDidUpdate = () => {
        if (this.props.mensagem && this.props.mensagem.toString().trim()) {
            ToastAndroid.show(this.props.mensagem, ToastAndroid.SHORT)
            this.props.onLimparMensagem()
        }
    }

    render() {
        return (
            <Navigator />
        )
    }
}

const mapStateToProps = ({ mensagem }) => {
    return {
        mensagem: mensagem.mensagem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLimparMensagem: () => dispatch(set_mensagem('')) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)