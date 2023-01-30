import {applyMiddleware, combineReducers, createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import createSagaMiddleware from 'redux-saga'
import pokeReducer from "./poke-reducer";
import {rootWatcher} from "../saga";


const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    pokemons: pokeReducer,
})

// // @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


// export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))
export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

// // @ts-ignore
// window.store = store

sagaMiddleware.run(rootWatcher)



type AppStateType = ReturnType<typeof reducers>
export type AppDispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never



