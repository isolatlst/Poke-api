import React from "react";
import {ValueOfPokemonsTypes} from "../types";

type FilterContextType = {
    filter: FilterType
    setFilter: (value: FilterType) => void
}
export type FilterType = {
    type: ValueOfPokemonsTypes | ''
    query: string
}


export const FilterContext = React.createContext<FilterContextType>('No Filter Provider' as unknown as FilterContextType)