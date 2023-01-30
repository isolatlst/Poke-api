import {useEffect, useRef} from "react";


const usePrev = <T>(value: T) => {
    const prev = useRef<T>()

    useEffect(() => {
        if (prev.current !== value) {
            prev.current = value;
        }
    }, [value])

    return prev.current
}

export default usePrev