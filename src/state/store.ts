import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { tagsReducer } from './tags/reducer';
import { rootSaga } from './rootSaga';

const rootReducer = combineReducers({
  tags: tagsReducer
});

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

export type AppState = ReturnType<typeof rootReducer>;

sagaMiddleWare.run(rootSaga);
