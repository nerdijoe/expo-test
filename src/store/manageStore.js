import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import clashApp from '../reducers'

const middlewares = applyMiddleware( logger, thunk)

const store = createStore( clashApp, middlewares)

export default store
