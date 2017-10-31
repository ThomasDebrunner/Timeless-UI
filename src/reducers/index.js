import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import program from './program'

export default combineReducers({
  routing: routerReducer,
  program
})
