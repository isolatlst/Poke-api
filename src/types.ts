export type PokemonType = {
    id: number
    name: string
    photo: string | undefined
    second_photo?: undefined | string
    types: Array<string> // types: Array<PokemonTypes>

    height: number
    weight: number
    base_experience: number
    stats: Array<{ // stats: Array<PokemonStats>
        name: string
        base_stat: number
    }>
}

export type PokemonTypesType = {
    slot: number
    type: {
        name: string
        url: string
    }
}
export type PokemonStatsType = {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}


export const pokemonTypes = [
    'bug', 'water', 'grass', 'fire',
    'normal', 'poison', 'electric', 'ground',
    'fairy', 'fighting', 'psychic', 'ghost',
    'rock', 'ice', 'flying', 'dark',
    'dragon', 'steel', 'unknown', 'shadow',
] as const

export type ValueOfPokemonsTypes = typeof pokemonTypes[keyof typeof pokemonTypes];

export type PaginationType = 'manual' | 'dynamic' | string

export type PaginationPropType = {
    count: number
    offset: number
    limit: number
}