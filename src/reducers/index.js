import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import program from './program'
import ui from './ui'

export default combineReducers({
  routing: routerReducer,
  program,
  ui,
})
