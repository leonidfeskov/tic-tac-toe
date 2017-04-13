import { combineReducers } from 'redux'
import activePlayer from './activePlayer'
import field from './field'
import { RESET_STATE } from '../constants/App'

const appReducer = combineReducers({
    activePlayer,
    field
});

const rootReducer = (state, action) => {
    if (action.type === RESET_STATE) {
        // придумать как правильно сблосить store
        state = {
            activePlayer: {
                name: 'X'
            },
            field: {
                data: [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null]
                ],
                winner: {
                    line: [],
                    name: undefined
                }
            }
        };
    }

    return appReducer(state, action)
};

export default rootReducer;
