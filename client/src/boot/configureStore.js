import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = composeWithDevTools({trace:true})

export default function configureStore () {
  const store = createStore(
    combineReducers,
    composeEnhancer(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga, store.dispatch);
  return store;
}


