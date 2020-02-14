import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import ComumStyles from '../ComumStyles'

import { connect } from 'react-redux'
import { setUser } from '../store/actions/user'
import AsyncStorage from '@react-native-community/async-storage'

class Splash extends React.Component {

    componentDidMount = async () => {
        const json = await AsyncStorage.getItem('userData')
        const userData = JSON.parse(json) || {}

        if (userData.token) {
            this.props.onSetUser(userData)
            this.props.navigation.navigate('Home')
        } else {
            this.props.navigation.navigate('Auth')
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color={ComumStyles.color.principal} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onSetUser: usuario => dispatch(setUser(usuario))
    }
}

export default connect(null, mapDispatchToProps)(Splash)