import { SET_DATA, SET_WINNER } from '../constants/Field';


const initialState = {
    data: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    winner: {
        line: [],
        name: undefined
    }
};

export default function field(state = initialState, action) {

    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.payload };
        case SET_WINNER:
            return { ...state, winner: action.payload };
        default:
            return state;
    }
}
