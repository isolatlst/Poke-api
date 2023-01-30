import React from "react";
import {PokemonType} from "../types";
import {FilterType} from "../context/FilterContext";

export const useFilter = (pokemons: Array<PokemonType>, filter: FilterType ) => {
    const sortedPokemons = React.useMemo(() => {
        if(filter.query && filter.type){
            return pokemons.filter(poke =>
                poke.name.includes(filter.query.toLowerCase())
                && poke.types.includes((filter.type as string).toLowerCase())
            )
        }
        if (filter.query) {
            return pokemons.filter(poke => poke.name.includes(filter.query.toLowerCase()))
        }
        if(filter.type) {
            return pokemons.filter(poke => poke.types.includes((filter.type as string).toLowerCase()))
        }
        return pokemons
    }, [filter.type, filter.query, pokemons])

    return sortedPokemons
}