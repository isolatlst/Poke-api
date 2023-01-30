import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {PaginationPropType} from "../types";
import {pokeACs} from "../redux/poke-ac";
import usePrev from "./usePrev";

type useDynamicPaginationPropType = PaginationPropType
    & {
    lastElementRef: React.RefObject<HTMLDivElement>,
    isActive: boolean,
    totalDataCount: number
}

const UseDynamicPagination = ({count, limit, offset, lastElementRef, isActive, totalDataCount}
                                  : useDynamicPaginationPropType) => {
    const prevDataCountRef = usePrev<number>(totalDataCount)
    const observer = useRef<IntersectionObserver>()
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (prevDataCountRef !== totalDataCount) {
            if (observer.current) observer.current?.disconnect()
            if (isActive) {
                observer.current = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting && limit * offset <= count) {
                        dispatch(pokeACs.setOffset(offset + 1))
                    }
                });
                observer.current.observe((lastElementRef.current!))
            }

        }
        return () => observer.current?.disconnect()
    }, [count, limit, offset, isActive, totalDataCount])
};

export default UseDynamicPagination;