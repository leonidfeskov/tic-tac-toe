const initialState = {
    activePlayer: 'X',
    message: '',
    field: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
};

export default function userstate(state = initialState) {
    return state;
}