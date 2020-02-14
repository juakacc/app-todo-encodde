import { SET_TAREFAS, SALVANDO_TAREFA, TAREFA_SALVA } from './ActionTypes'
import { set_mensagem } from './mensagem'
import axios from 'axios'

export const set_tarefas = tarefas => {
    return {
        type: SET_TAREFAS,
        payload: tarefas
    }
}

export const salvando_tarefa = () => {
    return {
        type: SALVANDO_TAREFA
    }
}

export const tarefa_salva = () => {
    return {
        type: TAREFA_SALVA
    }
}

export const load_tarefas = () => {
    return (dispatch, getState) => {
        axios.get('tarefas', {
            headers: {
                'Authorization': `Bearer ${getState().user.token}`
            }
        })
        .then(res => {
            dispatch(set_tarefas(res.data))
        })
        .catch(err => {
            dispatch(set_mensagem(err.response.data.mensagem || err.message))
        })
    }
}

export const salvar_tarefa = tarefa => {
    return (dispatch, getState) => {
        dispatch(salvando_tarefa())
        axios.post('tarefas', tarefa, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getState().user.token}`
            }
        })
        .then(res => {
            dispatch(set_mensagem('Tarefa cadastrada com sucesso!'))
            dispatch(tarefa_salva())
            dispatch(load_tarefas())
        })
        .catch(err => {
            dispatch(set_mensagem(err.response.data.mensagem || err.message))
        })
    }
}

export const editar_tarefa = tarefa => {
    return (dispatch, getState) => {
        dispatch(salvando_tarefa())
        axios.put(`tarefas/${tarefa.id}`, tarefa, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getState().user.token}`
            }
        })
        .then(res => {
            dispatch(set_mensagem('Tarefa atualizada com sucesso!'))
            dispatch(tarefa_salva())
            dispatch(load_tarefas())
        })
        .catch(err => {
            dispatch(set_mensagem(err.response.data.mensagem || err.message))
        })
    }
}