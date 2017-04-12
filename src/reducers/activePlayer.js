import { SET_ACTIVE_PLAYER } from '../constants/ActivePlayer';


const initialState = {
    name: 'X'
};

export default function player(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_PLAYER:
            return { ...state, name: action.payload };
        default:
            return state;
    }
}