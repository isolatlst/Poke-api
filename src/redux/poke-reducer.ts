import {pokeActionsType} from "./poke-ac";
import {PokemonType} from "../types";

type InitialStateType = typeof initialState
const initialState = {
    pokemons: [] as Array<PokemonType>,
    count: 0,             // ширина карточки + gap    // высота карточки + gap
    limit: Math.max(Math.floor((window.innerWidth / 185) * (window.innerHeight / 115)), 15),
    offset: 0,
    // limit: (Math.floor(window.innerWidth / 185)) * (Math.floor(window.innerHeight / 115)),
}

const pokeReducer = (state = initialState, action: pokeActionsType): InitialStateType => {
    switch (action.type) {
        case "POKE/SET_COUNT": {
            return {
                ...state,
                count: 1010
                // count: action.count --> ПОЧЕМУ В PokeAPI !ПОСЛЕ ТЫСЯЧИ! ID ИДУТ 1010 -> 10001 -> 10003
            }
        }
        case "POKE/SET_LIMIT": {
            return {
                ...state,
                limit: action.limit
            }
        }
        case "POKE/SET_OFFSET": {
            return {
                ...state,
                offset: action.offset
            }
        }
        case "POKE/SET_PARAMS": {
            return {
                ...state,
                offset: action.offset,
                limit: action.limit
            }
        }
        case "POKE/PUSH_POKE": {
            return {
                ...state,
                pokemons: [
                    ...state.pokemons,
                    ...action.pokemons
                ]
            }
        }
        case "POKE_REPLACE_POKE": {
            return {
                ...state,
                pokemons: action.pokemons
            }
        }

        default:
            return state
    }
}


export default pokeReducer