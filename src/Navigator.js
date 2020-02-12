import React from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import { View, Text } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import ComumStyles from './ComumStyles'

import Login from "./screens/Login"
import ListarTarefas from "./screens/ListarTarefas"
import CadastrarTarefa from "./screens/CadastrarTarefa"
import CadastrarUsuario from './screens/CadastrarUsuario'
import Logout from './screens/Logout'

const Header = () => {
    return (
        <View>
            <Text style={{fontSize: 24, color: ComumStyles.color.principal}}><Icon name='list-ul' size={23} /> TODO Encodde</Text>
        </View>
    )
}

const AuthStack = createStackNavigator({
    Login: {
        screen: Login
    },
    CadastrarUsuario: {
        screen: CadastrarUsuario
    }
}, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerTitle: () => <Header />
    }
})

class SairBtn extends React.Component {

    onPress = () => {
        this.props.navigation.navigate('Logout')
    }

    render() {
        return (
            <Icon name='power-off' size={30} style={{color: ComumStyles.color.secundaria, marginRight: 10}}
                onPress={this.onPress} />
        )
    }
}

const HomeStack = createStackNavigator({
    Listar: {
        screen: ListarTarefas
    }, 
    AdicionarTarefa: {
        screen: CadastrarTarefa
    },
    Logout: {
        screen: Logout
    }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitle: () => <Header />,
        headerRight: () => <SairBtn navigation={navigation} />
    })
})


const SwitchNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthStack
    },
    Home: {
        screen: HomeStack
    }
})

export default createAppContainer(SwitchNavigator)