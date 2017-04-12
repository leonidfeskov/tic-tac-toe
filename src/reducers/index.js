import { combineReducers } from 'redux'
import player from './player'
import field from './field'

export default combineReducers({
    player,
    field
})