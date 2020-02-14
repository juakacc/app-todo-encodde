import { LOADING_USER, USER_LOADED, USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/ActionTypes"


const estadoInicial = {
    id: 0,
    nome: '',
    token: '',
    isLoading: false
}

const reducer = (prevState = estadoInicial, action) => {
    switch(action.type) {
        case LOADING_USER:
            return {
                ...prevState,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...prevState,
                isLoading: false
            }
        case USER_LOGGED_IN: 
            return {
                ...prevState,
                id: action.payload.id,
                nome: action.payload.nome,
                token: action.payload.token
            }
        case USER_LOGGED_OUT:
            return {
                ...estadoInicial
            }
        default:
            return prevState
    }
}

export default reducer