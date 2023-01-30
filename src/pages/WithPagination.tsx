import React, {useRef} from 'react';
import Pagination from "../components/Pagination/Pagination";
import {PaginationContext} from "../context/PaginationContext";
import useDynamicPagination from "../hooks/useDynamicPagination";
import {useAppSelector} from "../redux/store";

type PropType = {
    children: React.ReactNode
    isActive: boolean
    totalDataCount: number
}

const WithPagination: React.FC<PropType> = ({children, isActive, totalDataCount}) => {
    const [limit, count] = useAppSelector(state => [state.pokemons.limit, state.pokemons.count])
    const offset = useAppSelector(state => state.pokemons.offset)

    const {paginationType} = React.useContext(PaginationContext)
    const lastElementRef = useRef(null)

    useDynamicPagination({
        count, limit, offset, lastElementRef, totalDataCount,
        isActive: (paginationType === "dynamic" && isActive)
    })


    return (
        <>
            {paginationType === "manual" && isActive &&
                <Pagination count={count} limit={limit} offset={offset}/>}
            {children}
            {paginationType === "dynamic" &&
                <div ref={lastElementRef} style={{gridArea: 'InterObserv'}}></div>}
        </>
    );
};

export default WithPagination;