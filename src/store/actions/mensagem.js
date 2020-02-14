import { SET_MENSAGEM } from "./ActionTypes"


export const set_mensagem = mensagem => {
    return {
        type: SET_MENSAGEM,
        payload: mensagem
    }
}