import React from 'react';
import Pokemon from "../components/Pokemon";
import cl from '../styles/Home.module.scss'
import {useAppSelector} from "../redux/store";
import {useDispatch} from "react-redux";
import {pokeACs, pokeACSaga} from "../redux/poke-ac";
import useDynamicPagination from "../hooks/useDynamicPagination";
import {PaginationType, ValueOfPokemonsTypes} from "../types";
import Pagination from "../components/Pagination";
import {getBounds} from "../tools/getBounds";
import {getLimits} from "../tools/getLimits";

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
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(pokeACSaga.fetchCount())
    }, [])

    React.useEffect(() => {
        const {start, end} = getBounds(limit, offset, count)
        dispatch(pokeACSaga.fetchPoke(start, end, paginationType))
    }, [limit, offset])

    React.useEffect(() => {
        if (pokemons.length) {
            dispatch(pokeACs.setParams(getLimits(offset, paginationType)))
        }
    }, [paginationType])

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
                    <Pokemon key={item.id} name={item.name} photo={item.photo || item.second_photo} types={item.types}/>
                ))}
            </div>
        </>
    );
};

export default Home;