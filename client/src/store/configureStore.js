/* eslint-disable */

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import sagas from './sagas'

function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer, 
    preloadedState, 
    composeWithDevTools(
      applyMiddleware(thunk, sagaMiddleware)
    )
  )

  sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore