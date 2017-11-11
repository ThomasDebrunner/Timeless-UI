import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import rootReducer from '../reducers'


export const history = createHistory()

function onSagaError(e) {
  console.error(e, 'Saga uncaught exception')
}

const sagaMiddleware = createSagaMiddleware({
  onError: onSagaError,
})

const initialState = {}
const enhancers = []
const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
)

sagaMiddleware.run(sagas)

export default store
