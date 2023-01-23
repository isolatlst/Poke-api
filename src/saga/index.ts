import {all} from "redux-saga/effects"
import {pokeWatcher} from "./poke-saga";


export function* rootWatcher (){
    yield all([ pokeWatcher()])
}