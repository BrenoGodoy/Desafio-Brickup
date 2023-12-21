import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks-slice"
import { TypedUseSelectorHook, useSelector } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';
import { watchAdd, watchStart, watchEdit, watchDel } from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false, serializableCheck: false
}).concat(sagaMiddleware),
});

export function* rootSaga() {
  yield all([
    watchAdd(),
    watchStart(),
    watchEdit(),
    watchDel()
    // Adicione outras sagas conforme necessário
  ]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;