import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import Perf from 'react-addons-perf'
import ReduxImmutableStateInvaiant from 'redux-immutable-state-invariant'
import { routerReducer, routerMiddleware} from 'react-router-redux'
import resetEnhancer from './enhancer/reset'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const win = window
win.Perf = Perf

const originalReducers = {
  routing: routerReducer
}

const reducers = combineReducers(originalReducers)

const middlewares = []
const middleware = routerMiddleware(history)
middlewares.push(middleware)
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(ReduxImmutableStateInvaiant())
}

const storeEnhancers = compose(
  resetEnhancer,
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : f => f
)

const store = createStore(reducers, {}, storeEnhancers)
store._reducers = originalReducers

export default store