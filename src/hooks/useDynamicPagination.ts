import React from "react";
import {pokeACs} from "../redux/poke-ac";
import {useDispatch} from "react-redux";
import {PaginationPropType} from "../types";

type useDynamicPaginationPropType = PaginationPropType
    & { appRef: React.RefObject<HTMLDivElement>, isActive: boolean }

const UseDynamicPagination = ({count, limit, offset, appRef, isActive}
                                  : useDynamicPaginationPropType) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (isActive) {
            appRef.current?.addEventListener("scroll", scrollHndlr)
        } else {
            appRef.current?.removeEventListener("scroll", scrollHndlr)
        }
        return () => appRef.current?.removeEventListener("scroll", scrollHndlr)
    }, [count, limit, offset, isActive])

    const scrollHndlr = () => {
        if (appRef.current!.scrollHeight - (appRef.current!.scrollTop + window.innerHeight) < 1
            && limit * offset <= count) {
            dispatch(pokeACs.setOffset(offset + 1))
        }
    }
};

export default UseDynamicPagination;