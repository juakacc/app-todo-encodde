import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from './reduces/user'
import tarefaReducer from './reduces/tarefa'
import mensagemReducer from './reduces/mensagem'

const reducers = combineReducers({
    user: userReducer,
    tarefa: tarefaReducer,
    mensagem: mensagemReducer
})

const storeConfig = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default storeConfig