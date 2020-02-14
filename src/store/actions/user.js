
import axios from 'axios'
import { LOADING_USER, USER_LOADED, USER_LOGGED_IN, USER_LOGGED_OUT } from './ActionTypes'

import { set_mensagem } from './mensagem'
import AsyncStorage from '@react-native-community/async-storage'

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const criarUsuario = usuario => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post('usuarios', usuario, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            dispatch(userLoaded())
            dispatch(set_mensagem('Usuário cadastrado com sucesso!'))
        })
        .catch(err => {
            dispatch(set_mensagem(err.response.data.mensagem || err.message))
        })
    }
}

export const setUser = usuario => {
    return {
        type: USER_LOGGED_IN,
        payload: usuario
    }
}

export const login = usuario => {
    return dispatch => {
        try {
            dispatch(loadingUser())
            axios.post('usuarios/login', {
                username: usuario.username,
                password: usuario.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                const token = res.data.token
                const usuario_id = res.data.usuario_id

                axios.get(`usuarios/${usuario_id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                .then(async res => {
                    delete usuario.password
                    usuario.id = usuario_id
                    usuario.nome = res.data.nome
                    usuario.token = token
                    dispatch(setUser(usuario))
                    await AsyncStorage.setItem('userData', JSON.stringify(usuario))
                    dispatch(userLoaded())
                })
                .catch(err => {
                    dispatch(set_mensagem(err.response.data.mensagem || err.message))
                })
            })
            .catch(err => {
                dispatch(set_mensagem(err.response.data.mensagem || err.message))
            })
        } catch(err) {
            dispatch(set_mensagem('Servidor não encontrado'))
        }
    }
}