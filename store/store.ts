import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector as selectorHook, useDispatch as dispatchHook, TypedUseSelectorHook } from 'react-redux';
import { reducer as toDoReducer } from './slices/toDoSlice'

const rootReducer = combineReducers({
    todo: toDoReducer
})

const store = configureStore({
    reducer: rootReducer
});

export type RooState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RooState> = selectorHook;

export default store;