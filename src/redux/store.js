import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";

const createReducer = (injectedReducer = {}) => {
  const rootReducer = combineReducers({
    ...injectedReducer,
  });
  return rootReducer;
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const { run: runSaga } = sagaMiddleware;
const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
];

const store = configureStore({
  reducer: createReducer(),
  enhancers,
  devTools: true,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      thunk: false,
    }),
    ...middlewares,
  ],
});

export default store;
