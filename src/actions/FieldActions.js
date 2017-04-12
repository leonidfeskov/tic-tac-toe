import { SET_DATA, SET_WINNER } from '../constants/Field';


export function setData(data) {
    return {
        type: SET_DATA,
        payload: data
    }
}

export function setWinner(winner) {
    return {
        type: SET_WINNER,
        payload: winner
    }
}
