const initialState = {
    data: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
};

export default function field(state = initialState, action) {

    switch (action.type) {
        case 'SET_DATA':
            return { ...state, data: action.payload };
        default:
            return state;
    }
}
