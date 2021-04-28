import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './ducks';
import rootSaga from './sagas';
// import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

// const middleware = process.env.NODE_ENV === 'production' ?

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  // middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);

export default store;
