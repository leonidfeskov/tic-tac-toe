import { combineReducers } from 'redux'
import activePlayer from './activePlayer'
import field from './field'

export default combineReducers({
    activePlayer,
    field
})