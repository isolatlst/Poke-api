import React from 'react';
import PokemonCard from "../components/PokemonCard";
import cl from '../styles/Home.module.scss'
import {useAppSelector} from "../redux/store";
import useDynamicPagination from "../hooks/useDynamicPagination";
import {PaginationType, ValueOfPokemonsTypes} from "../types";
import Pagination from "../components/Pagination";

type PropType = {
    appRef: React.RefObject<HTMLDivElement>
    searchByNameQuery: string
    searchByTypeQuery: ValueOfPokemonsTypes | ''
    paginationType: PaginationType
}


const Home: React.FC<PropType> = ({appRef, paginationType,
                                      searchByNameQuery, searchByTypeQuery}) => {
    const pokemons = useAppSelector(state => state.pokemons.pokemons)
    const [limit, count] = useAppSelector(state => [state.pokemons.limit, state.pokemons.count])
    const offset = useAppSelector(state => state.pokemons.offset)

    const sortedPokemons = React.useMemo(() => {
        if(searchByNameQuery && searchByTypeQuery){
            return pokemons.filter(poke =>
                poke.name.includes(searchByNameQuery.toLowerCase())
                && poke.types.includes((searchByTypeQuery as string).toLowerCase())
            )
        }
        if (searchByNameQuery) {
            return pokemons.filter(poke => poke.name.includes(searchByNameQuery.toLowerCase()))
        }
        if(searchByTypeQuery) {
            return pokemons.filter(poke => poke.types.includes((searchByTypeQuery as string).toLowerCase()))
        }
        return pokemons
    }, [searchByNameQuery, searchByTypeQuery, pokemons])

    useDynamicPagination({count, limit, offset, appRef,
        isActive: (paginationType === "dynamic" && !searchByNameQuery && !searchByTypeQuery)})

    return (
        <>
            {paginationType === "manual" && <Pagination count={count} limit={limit} offset={offset}/>}
            <div className={cl.pokemons}>
                {sortedPokemons && sortedPokemons.map(item => (
                    <PokemonCard key={item.id} id={item.id} name={item.name}
                                 photo={item.photo || item.second_photo} types={item.types}/>
                ))}
            </div>
        </>
    );
};

export default Home;