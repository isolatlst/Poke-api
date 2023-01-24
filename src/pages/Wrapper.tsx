import React from 'react';
import {useAppSelector} from "../redux/store";
import {useDispatch} from "react-redux";
import {pokeACs, pokeACSaga} from "../redux/poke-ac";
import {getBounds} from "../utils/getBounds";
import {PaginationType} from "../types";
import {getLimits} from "../utils/getLimits";

type PropType = {
    children: React.ReactNode
    paginationType: PaginationType
}

const Wrapper: React.FC<PropType> = ({children, paginationType}) => {
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
        dispatch(pokeACs.setParams(getLimits(offset, paginationType)))
    }, [paginationType])


    return <>{children}</>
};

export default Wrapper;