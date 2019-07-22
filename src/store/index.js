import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'
// import history from '../history'
// import { routerMiddleware } from 'connected-react-router'

const sagaMiddleware = createSagaMiddleware()

window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

const store = createStore(
  rootReducer(),
  compose(
    applyMiddleware(
      // routerMiddleware(history),
      sagaMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

sagaMiddleware.run(rootSaga)

export default store
