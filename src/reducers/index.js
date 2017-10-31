import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import program from './program'

export default combineReducers({
  routing: routerReducer,
  counter,
  program
})
