import { SET_ACTIVE_PLAYER } from '../constants/ActivePlayer';


export function setActivePlayer(name) {

    return {
        type: SET_ACTIVE_PLAYER,
        payload: name
    }

}
