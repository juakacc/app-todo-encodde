import { SET_TAREFAS, SALVANDO_TAREFA, TAREFA_SALVA } from "../actions/ActionTypes"


const estadoInicial = {
    tarefas: [],
    isLoading: false
}

const reducer = (prevState = estadoInicial, action) => {
    switch(action.type) {
        case SET_TAREFAS:
            return {
                ...prevState,
                tarefas: action.payload
            }
        case SALVANDO_TAREFA:
            return {
                ...prevState,
                isLoading: true
            }
        case TAREFA_SALVA: 
            return {
                ...prevState,
                isLoading: false
            }
        default:
            return {
                ...prevState
            }
    }
}

export default reducer