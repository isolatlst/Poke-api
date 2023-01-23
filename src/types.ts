import {pokemonTypes} from "./App";

export type PokemonType = {
    id: number
    name: string
    photo: string | undefined
    second_photo?: undefined | string
    types: Array<string> // types: Array<PokemonTypes>
    //sprites:{
    //  other:{
    //      dream_world:{
    //          front_default: string ---> photo
    //      }
    //      home:{
    //          front_default: string ---> second_photo
    //      }
    //  }
    //}
}

export type PokemonTypes = {
    slot: number
    type: {
        name: string
        url: string
    }
}

export type ValueOfPokemonsTypes = typeof pokemonTypes[keyof typeof pokemonTypes];

export type PaginationType = 'manual' | 'dynamic' | string

export type PaginationPropType = {
    count: number
    offset: number
    limit: number
}