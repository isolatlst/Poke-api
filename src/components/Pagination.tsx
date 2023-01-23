import React from 'react'
import cl from '../styles/Pagination.module.scss'
import {pokeACs} from "../redux/poke-ac";
import {useDispatch} from "react-redux";
import PaginateBtn from "./PaginateBtn";
import {PaginationPropType} from "../types";


type PropsType = PaginationPropType & {portionSize?: number}


const Pagination: React.FC<PropsType> = ({count, offset, limit,
                 portionSize = 7}) => {
    const portionCount =  Math.floor(count / limit)
    const [currentPortion, setCurrentPortion] = React.useState(Math.ceil((offset + 1) / portionSize))
    const leftPortionPageNumber = portionSize * (currentPortion - 1) > 0 ? portionSize * (currentPortion - 1) : 0;
    const rightPortionPageNumber = leftPortionPageNumber + portionSize - 1
    const pages = [] as Array<number>
    for (let i = 0; i <= portionCount; i++) {
        pages.push(i)
    }
    const dispatch = useDispatch()

    const swapPage = (e: React.BaseSyntheticEvent) => {
        if (e.target.localName === 'span') {
            dispatch(pokeACs.setOffset(Number(e.target.innerHTML)))
        }
    }

    return (
        <div className={cl.navigation}>
            <PaginateBtn text='<' portionCount={portionCount} disabled={!(currentPortion > 1)}
                         callback={() => setCurrentPortion(currentPortion - 1)}/>

            <div className={cl.navigation__pages} style={{gridTemplateColumns: `repeat(${portionSize}, 40px)`}}
                 onClick={swapPage}>
                {pages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page =>
                        <span key={page}
                              className={offset === page ? cl.navigation__page_selected : cl.navigation__page}>
                            {page}
                        </span>
                    )
                }
            </div>

            <PaginateBtn text='>' portionCount={portionCount} disabled={rightPortionPageNumber >= portionCount}
                         callback={() => setCurrentPortion(currentPortion + 1)}/>
        </div>
    )
}

export default Pagination;

