import {InferActionsTypes} from "./store";
import {PaginationType, PokemonType} from "../types";


export type pokeActionsType = InferActionsTypes<typeof pokeACs>
export type pokeActionsSagaType = InferActionsTypes<typeof pokeACSaga>

export const pokeACs = {
    setCount: (count: number) => ({type: 'POKE/SET_COUNT', count} as const),
    setLimit: (limit: number) => ({type: 'POKE/SET_LIMIT', limit} as const),
    setOffset: (offset: number) => ({type: 'POKE/SET_OFFSET', offset} as const),
    setParams: ({offset, limit}: { offset: number, limit: number }) =>
        ({type: 'POKE/SET_PARAMS', offset, limit} as const),
    pushPokemons: (pokemons: Array<PokemonType>) => ({type: 'POKE/PUSH_POKE', pokemons} as const),
    replacePokemons: (pokemons: Array<PokemonType>) => ({type: 'POKE_REPLACE_POKE', pokemons} as const),
}

export const pokeACSaga = {
    fetchCount: () => ({type: 'POKE/FETCH_COUNT'} as const),
    fetchPoke: (start: number, end: number, paginationType: PaginationType) =>
        ({type: 'POKE/FETCH_POKEMONS', start, end, paginationType} as const),
}