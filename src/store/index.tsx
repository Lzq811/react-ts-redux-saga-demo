import { createStore, compose, applyMiddleware } from 'redux'

import createSagaMiddleware from '@redux-saga/core'

import reducer from './reducer'

import dogSaga from './saga'

const sagaMiddleWare = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare))

const store = createStore(reducer, enhancer)

sagaMiddleWare.run(dogSaga)

export default store