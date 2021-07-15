import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from '@redux-saga/core'

import reducer from './reducers'

import dogsaga from './saga'

const sagaMiddleWare = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = composeEnhancers(applyMiddleware(sagaMiddleWare))

const store = createStore(reducer, enhancers)

sagaMiddleWare.run(dogsaga)

export default store