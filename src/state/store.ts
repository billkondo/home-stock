import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

// Reducers
import { tagsReducer } from './tags/reducer';
import { productsReducer } from './products/reducer';

// Sagas
import { rootSaga } from './rootSaga';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  tags: tagsReducer,
  router: connectRouter(history),
  products: productsReducer
});

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare, routerMiddleware(history))
);

export type AppState = ReturnType<typeof rootReducer>;

sagaMiddleWare.run(rootSaga);
