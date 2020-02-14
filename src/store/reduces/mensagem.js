import { SET_MENSAGEM } from "../actions/ActionTypes"


const estadoInicial = {
    mensagem: ''
}

const reducer = (prevState = estadoInicial, action) => {
    switch(action.type) {
        case SET_MENSAGEM:
            return {
                ...prevState,
                mensagem: action.payload
            }
        default:
            return {
                ...prevState
            }
    }
}

export default reducer