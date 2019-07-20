import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { tagsReducer } from './tags/reducer';

import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  tags: tagsReducer,
  router: connectRouter(history)
});

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare, routerMiddleware(history))
);

export type AppState = ReturnType<typeof rootReducer>;

sagaMiddleWare.run(rootSaga);
